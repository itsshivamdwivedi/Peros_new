"use client";

import React, { useEffect } from "react";

import gsap from "gsap";
import { Bounded } from "./Bounded";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "../TextSplitter";
import Button from "../Button";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStore } from "@/app/hooks/useStore";

import Scene from "./Scene";
import { read } from "fs";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, 
    });
  }, []);


  const ready =useStore((state)=>state.ready);
  const isDesktop = useMediaQuery("(min-width:768px)",true)

  useGSAP(() => {
    if(!ready) return ;

    const introTl = gsap.timeline();
    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.4,
        stagger: 1,
      })
    
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8"
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        y: 10,
        duration: 0.6,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
    .from(
        "body",
        {
          backgroundColor: "#e1eaee",
        }
      
        
        ,
      )
    
    
    
    
    
    // .from(".text-side-heading .split-char", {
    //   scale: 1.1,
    //   y: 40,
    //   rotate: -25,
    //   opacity: 0,
    //   stagger: 1,
    //   ease: "back.out(3)",
    //   duration: 0.1,

    // });
  }, {dependencies:[ready,isDesktop]});

  return (
    <Bounded>
      {isDesktop && (

     <View className="hero-scene sticky top-0 z-50 -mt-[100vh] hidden h-screen
      w-screen md:block"
      >
      <Scene />
     </View>

      )}


      <section className="grid  w-88 place-items-center overflow-hidden">
        <div className="hero">  
        <div className="grid h-screen auto-rows-min place-items-center text-center">
          <h1 className="hero-header-word lg:text-[7rem] text-6xl font-black uppercase leading-[.8] text-green-500 md:text-[7rem] mt-8">
            <TextSplitter
              text="SURVIVAL OF FITTEST"
              wordDisplayStyle="block"
              className="hero-header-word"
            />
          </h1>

          {/* Subheading */}
          <div className="hero-subheading mt-12 text-4xl font-semibold text-sky-950 lg:text-5xl">
            <p>Explore the journey of the fittest in nature and in life!</p>
          </div>

         
          <div className="hero-body text-2xl font-normal text-sky-950">
            <p>
              Embrace the survival journey. Join us now for exclusive offers and
              insights.
            </p>
          </div>

          <div className="mt-8">
            <Button buttonLink="/shop" buttonText="Shop Now" className="hero-button" />
          </div>
        </div>

        {/* Second Fold */}
        <div className="grid text-side hero-body h-96 items-center gap-4 md:grid-cols-2 mt-20">
          <div className="text-side-heading text-balance text-4xl font-black uppercase text-sky-950 lg:text-6xl" data-aos="fade-left">
            <TextSplitter
              text="Health, Quality, Transformation"
              wordDisplayStyle="block"
            />
            <div className="hero-body mt-8 text-xl font-normal text-sky-950">
              <p>
                "At Peros, we aim to transform breakfast into a vibrant, nutritious
                experience. We believe in making premium quality peanut butter accessible
                to everyone, supporting your journey to a healthier lifestyle."
              </p>
            </div>
          </div>
          <div className="image-side flex justify-center items-center" data-aos="fade-right">
            {/* <Image
              src="/assets/home-images/second-fold.jpeg"
              alt="Peanut Butter"
              className="rounded-lg shadow-lg"
              width={500} 
              height={300}
              priority 
            /> */}
          </div>
        </div>
        </div>

       
       

      </section>
      {/* <div className="grid third-fold  h-screen items-center gap-6 md:grid-cols-2" >
          <div className="image-side flex justify-center items-center" data-aos="fade-right">
            <Image
              src="/assets/home-images/usp.jpg"
              alt="Pouring Peanut Butter"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="usp-text text-4xl font-black uppercase text-sky-950 lg:text-6xl" data-aos="fade-left">
            <TextSplitter
              text="Why Choose Peros?"
              wordDisplayStyle="inline-block"
              className="usp-word"
            />
            <div className="usp-points mt-8 space-y-4 text-xl font-normal text-sky-950">
              <p>• Liquid Peanut Butter for Easy Use</p>
              <p>• Lesser Additives, More Health</p>
              <p>• Natural Protein Without Whey</p>
              <p>• Comprehensive Support for Your Health Goals</p>
            </div>
          </div>
        </div> 
       
         <div
          className="grid fourth-fold h-96 items-center gap-6 md:grid-cols-2"
          data-aos="fade-up"
        >
          <div className="text-side" data-aos="slide-right" data-aos-delay="300"
     data-aos-offset="300" >
            <h2 className="text-4xl font-black uppercase text-sky-950 lg:text-6xl">
              <TextSplitter
                text="Our Values"
                wordDisplayStyle="block"
                className="values-heading"
              />
            </h2>
            <div className="mt-8 text-xl font-normal text-sky-950">
              <p>
                Peros embodies health, quality, exclusivity, and enthusiasm. Every jar is
                a reflection of our commitment to delivering premium nutrition and taste,
                transforming not just your breakfast but your entire day.
              </p>
            </div>
          </div>
          <div className="image-side flex justify-center items-center">
            <Image
              data-aos="slide-left"
              src="/assets/home-images/gymboy.jpg"
              alt="Active Lifestyle"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
              priority
            />
          </div>
        </div> */}
    </Bounded>
  );
};

export default Hero;
