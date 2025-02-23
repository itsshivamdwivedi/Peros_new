"use client";
//   this will require paid version access
//  The otp and number used for verification are predefined in the firebase application

import { auth } from "@/lib/firebase";
import {
    ConfirmationResult,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import React, { FormEvent, useState, useEffect, useTransition } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function OtpLogin() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState("");
    const [resendCountdown, setResendCountdown] = useState(0);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [isPending, startTransition] = useTransition();

    // Countdown timer for resend OTP
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (resendCountdown > 0) {
            timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [resendCountdown]);

    // Initialize reCAPTCHA verifier
    useEffect(() => {
        const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            size: "invisible", // Use invisible reCAPTCHA
        });

        setRecaptchaVerifier(verifier);

        return () => {
            verifier.clear(); // Cleanup on unmount
        };
    }, []);

    // Automatically verify OTP when all digits are entered
    useEffect(() => {
        if (otp.length === 6) {
            verifyOtp();
        }
    }, [otp]);

    // Function to request OTP
    const requestOtp = async (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        setResendCountdown(60); // Start countdown for resend OTP

        startTransition(async () => {
            setError("");
            setSuccess("");

            if (!recaptchaVerifier) {
                return setError("RecaptchaVerifier is not initialized.");
            }

            // Validate phone number format
            if (!phoneNumber.startsWith("+")) {
                return setError("Please enter your phone number with the country code (e.g., +91).");
            }

            try {
                const confirmationResult = await signInWithPhoneNumber(
                    auth,
                    phoneNumber,
                    recaptchaVerifier
                );
                setConfirmationResult(confirmationResult);
                setSuccess("OTP sent successfully!");
            } catch (err: any) {
                console.error(err);
                setResendCountdown(0); // Stop countdown on error
                if (err.code === "auth/invalid-phone-number") {
                    setError("Invalid phone number. Please check the phone number.");
                } else if (err.code === "auth/too-many-requests") {
                    setError("Too many requests. Please try again after some time.");
                } else {
                    setError("Failed to send OTP. Please try again.");
                }
            }
        });
    };

    // Function to verify OTP
    const verifyOtp = async () => {
        startTransition(async () => {
            setError("");
            setSuccess("");

            if (!confirmationResult) {
                return setError("Please request the OTP first.");
            }

            try {
                await confirmationResult.confirm(otp);
                setSuccess("OTP verified successfully!");
                router.replace("/"); // Redirect after successful verification
            } catch (err: any) {
                console.error(err);
                setError("Failed to verify OTP. Please check the OTP.");
            }
        });
    };

    // Loading indicator
    const loadingIndicator = (
        <div role="status" className="flex justify-center w-3 h-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
                    <stop offset="0" stopColor="#FF156D"></stop>
                    <stop offset=".3" stopColor="#FF156D" stopOpacity=".9"></stop>
                    <stop offset=".6" stopColor="#FF156D" stopOpacity=".6"></stop>
                    <stop offset=".8" stopColor="#FF156D" stopOpacity=".3"></stop>
                    <stop offset="1" stopColor="#FF156D" stopOpacity="0"></stop>
                </radialGradient>
                <circle transformOrigin="center" fill="none" stroke="url(#a11)" strokeWidth="6" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70">
                    <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
                </circle>
                <circle transformOrigin="center" fill="none" opacity=".2" stroke="#FF156D" strokeWidth="6" strokeLinecap="round" cx="100" cy="100" r="70"></circle>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );

    return (
        <div className="mt-4">
            {!confirmationResult && (
                <form onSubmit={requestOtp}>
                    <Input
                        className="text-black"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number with country code (e.g., +91)"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                        Please enter your number with the country code (e.g., +91 for IND).
                    </p>
                </form>
            )}

            {confirmationResult && (
                <div className="mt-4">
                    <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
            )}

            <Button
                disabled={!phoneNumber || isPending || resendCountdown > 0}
                onClick={() => requestOtp()}
                className="mt-5"
            >
                {resendCountdown > 0
                    ? `Resend OTP in ${resendCountdown} seconds`
                    : isPending
                    ? 'Sending OTP...'
                    : 'Send OTP'}
            </Button>

            <div className="p-10 text-center">
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </div>

            <div id="recaptcha-container"></div>
            {isPending && loadingIndicator}
        </div>
    );
}

export default OtpLogin;