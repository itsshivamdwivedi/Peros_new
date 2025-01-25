"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { gsap } from "gsap";

type AddressDetails = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  pincode: string;
  [key: string]: string; 
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const { cart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false); // Popup for form warning
  const [showPopup, setShowPopup] = useState(false); // Payment success popup
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "Razorpay">("Razorpay"); // Added payment method
  const [address, setAddress] = useState<AddressDetails>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    pincode: "",
  });

  const [isCartOpen, setIsCartOpen] = useState(false); // For showing/hiding cart details

  const checkoutRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null); // Reference for form animation

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    // Load Razorpay SDK
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);

    // GSAP animation for checkout section
    gsap.fromTo(
      checkoutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Form animation (fade-in and slide-up)
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );
  }, []);

  const handlePayment = async () => {
    if (!isRazorpayLoaded && paymentMethod === "Razorpay") {
      console.error("Razorpay SDK is not loaded");
      alert("Razorpay SDK is not loaded. Please try again later.");
      return;
    }
  
    // Check if form is filled
    if (
      !address.firstName ||
      !address.lastName ||
      !address.phone ||
      !address.email ||
      !address.address ||
      !address.state ||
      !address.pincode
    ) {
      // Show the popup if form is incomplete
      setShowFormPopup(true);
      return;
    }
  
    setIsProcessing(true);
    try {
      if (paymentMethod === "Razorpay") {
        // Create order on the backend for Razorpay
        const response = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: subtotal }), // Send subtotal to backend
        });
  
        if (!response.ok) {
          throw new Error("Failed to create Razorpay order");
        }
  
        const data = await response.json();
  
        // Razorpay options
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: subtotal * 100, // Amount in smallest currency unit
          currency: "INR",
          name: "Your Company Name",
          description: "Test Transaction",
          order_id: data.orderId,
          handler: function (response: any) {
            console.log("Payment Successful:", response);
            setPaymentDetails({
              ...response,
              address,
              cartItems: cart,
            }); // Store payment details, address, and cart
            setPaymentMethod("Razorpay");
            setShowPopup(true); // Show confirmation popup
  
            // Send Email Acknowledgment after successful payment
            fetch("/api/send-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                address,
                cart,
                paymentMethod: "Razorpay",
                orderId: data.orderId,
              }),
            });
          },
          prefill: {
            name: `${address.firstName} ${address.lastName}`,
            email: address.email,
            contact: address.phone,
          },
          theme: {
            color: "#3399cc",
          },
        };
  
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        // Directly show order confirmation if payment method is COD
        setPaymentDetails({
          orderId: "COD123456", // Dummy order ID for COD
          paymentMethod: "Cash on Delivery",
          address,
          cartItems: cart,
        });
        setShowPopup(true); // Show confirmation popup
  
        // Send Email Acknowledgment for COD
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address,
            cart,
            paymentMethod: "Cash on Delivery",
            orderId: "COD123456", // Example order ID for COD
          }),
        });
      }
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="">
     
      <div ref={checkoutRef} className="p-8">
    

        {/* Address Form */}
      <div ref={formRef} className="mb-8">
          <h2 className="text-xl font-semibold font-serif mb-4 hover:text-green-400">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/** Floating Input Fields */}
            {[
              { name: "firstName", label: "First Name"  },
              { name: "lastName", label: "Last Name" },
              { name: "phone", label: "Phone Number", type: "phone no" },
              { name: "email", label: "Email", type: "email" },
              { name: "address", label: "Address", span: 2 },
              { name: "state", label: "State" },
              { name: "pincode", label: "Pincode" },
            ].map((field, idx) => (
              <div
                key={idx}
                className={`relative ${field.span ? "md:col-span-2" : ""}`}
              >
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={address[field.name]}
                  onChange={(e) =>
                    setAddress({ ...address, [field.name]: e.target.value })
                  }
                  required
                  className="peer px-4 py-2 w-full text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 focus:border-green-400"
                />
                <span className="absolute left-4 top-2/4 -translate-y-2/4 text-gray-500 uppercase tracking-wide bg-white px-1 text-lg duration-200 pointer-events-none peer-focus:text-green-400 peer-focus:text-sm peer-focus:top-0 peer-focus:-translate-y-1/2">
                  {field.label}
                </span>
              </div>
            ))}
          </form>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-8 font-serif font-bold mt-[6vh]">
          <h2 className="text-xl font-semibold mb-4 hover:text-green-400">Payment Method</h2>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Razorpay"
              checked={paymentMethod === "Razorpay"}
              onChange={() => setPaymentMethod("Razorpay")}
              className="mr-2"
            />
            Razorpay
          </label>
          <label className="flex items-center mt-4">
            <input
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>

        {/* Order Summary */}
        <div className="mb-8 mt-[6vh]">
          <h2 className="text-xl font-semibold mb-4 font-serif hover:text-green-400">Order Summary</h2>
          <div className="border rounded-md p-4">
            <div className="flex justify-between mb-2 font-semibold">
              <span >Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {/* Cart Details Dropdown */}
            <div>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="bg-gray-200 p-2 rounded-md mt-4 w-full text-left font-semibold"
              >
                {isCartOpen ? "Hide Cart Details" : "Show Cart Details"}
              </button>

              {isCartOpen && (
                <div className="mt-2">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-evenly content-center ">
                      <div><span><img src={item.image} className="w-20 h-20 object-cover mr-4 xl:object-center xl:w-[50wh] xl:h-[20vh]   "  alt="" /> </span></div>
                      <div className="flex justify-center content-center self-center">{item.name} x {item.quantity}</div>
                      <div className="flex justify-center content-center self-center">  ₹{item.price * item.quantity}</div>
                      
                      
                     
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-500"
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>

      {/* Form Incompletion Popup */}
      {showFormPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 font-serif ">Form Incomplete!</h2>
            <p>Please fill out the shipping address form before proceeding to payment.</p>
            <button
              className="hover:bg-orange-500 bg-green-400 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => setShowFormPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Order Confirmation Popup */}
      {showPopup && paymentDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 font-serif">Order Confirmed!</h2>
            <p>
              <strong>Order ID:</strong> {paymentDetails.orderId}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentDetails.paymentMethod}
            </p>
            <p>
              <strong>Shipping Address:</strong>
              <br />
              {`${address.firstName} ${address.lastName}`}
              <br />
              {address.address}
              <br />
              {address.state}, {address.pincode}
              <br />
              <strong>Email:</strong> {address.email}
              <br />
              <strong>Phone:</strong> {address.phone}
            </p>
            <h3 className="mt-4 font-semibold">Cart Summary:</h3>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <button
              className="bg-green-500 hover:bg-orange-400 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
