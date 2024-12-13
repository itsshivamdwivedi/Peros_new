// Timeline.js
"use client";
import React from "react";
import Head from "next/head";
import "./Timeline-Wrapper.css";

const Timeline = () => {
  const timelineData = [
    {
      image: "/assets/about-images/healthy.png", // Image source path
      number: 1,
      title: "Healthy",
      details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    },
    {
      image: "/assets/about-images/creativity.png", // Image source path
      number: 2,
      title: "Creativity",
      details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    },
    {
      image: "/assets/about-images/exclusive.png", // Image source path
      number: 3,
      title: "Exclusive",
      details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    },
    {
      image: "/assets/about-images/high-quality.png", // Image source path
      number: 4,
      title: "Compass",
      details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    },
    {
      image: "/assets/about-images/organic.png", // Image source path
      number: 5,
      title: "100% Organic",
      details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <h1 className="text-center text-3xl font-semibold mt-10 mb-10"> Our Values</h1>
      <div className="timeline-wrapper">
       
        <div className="timeline-container">
          {timelineData.map((point, index) => (
            <div className="timeline-point" key={index}>
              {/* Add img tag for images */}
              <img src={point.image} alt={point.title} className="timeline-image" />
              <div className="popup">
                <div className="popup-number">{point.number}</div>
                <div className="popup-details text">
                  <div className="popup-title">{point.title}</div>
                  {point.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
