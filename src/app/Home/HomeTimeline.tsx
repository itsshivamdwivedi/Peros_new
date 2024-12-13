"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./timeline.css"; // Adjust the path if needed

const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const timelineRef = useRef(null);

    useEffect(() => {
        const revealTimelineItems = () => {
            const items = timelineRef.current.querySelectorAll(".timeline-item");
            const updatedVisibleItems = [];
    
            items.forEach((item, index) => {
                const position = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (position < windowHeight - 100) {
                    updatedVisibleItems.push(index);
                }
            });
    
            setVisibleItems(updatedVisibleItems);
        };
    
        // Attach event listener
        window.addEventListener("scroll", revealTimelineItems);
        revealTimelineItems();
    
        // Force reflow
        if (timelineRef.current) {
            timelineRef.current.style.display = 'none'; // Hide the timeline
            timelineRef.current.offsetHeight; // Trigger reflow
            timelineRef.current.style.display = ''; // Show the timeline again
        }
    
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("scroll", revealTimelineItems);
            setVisibleItems([]); // Reset visible items on unmount
        };
    }, []);
    return (
        <div className="mt-12">
            <center className="center-text font-bold mb-14 mt-12">
                <h2 className="text-sky-950">Peros Timeline</h2>
            </center>
            <div className="timeline-container" ref={timelineRef}>
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${
                            index % 2 === 0 ? "left" : "right"
                        } ${visibleItems.includes(index) ? "visible" : ""}`}
                    >
                        <div className="timeline-content">
                            <Image
                                src={item.avatar}
                                alt={item.title}
                                className="timeline-avatar"
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="timeline-title font-semibold uppercase">
                                    {item.title}
                                </h2>
                                <p className="timeline-description">
                                    <Image
                                        src={item.image}
                                        width={340}
                                        height={260}
                                        className="enlarge-on-hover timeline-image"
                                        alt={item.title}
                                    />
                                    <br />
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const timelineData = [
    {
        title: "Organic Peanuts",
        avatar: "/assets/about-images/organicpeanuts.webp",
        image: "/assets/about-images/organicpeanuts.webp",
        description:
            "We pick the best quality organic peanuts from organic farms certified by USDA Organic, SGS Organic, India Organic and Jaivik Bharat. Peanuts are checked for moisture and aflatoxin content.",
    },
    {
        title: "Sorting",
        avatar: "/assets/about-images/sorting.webp",
        image: "/assets/about-images/sorting.webp",
        description:
            "Only uniform big size nutritious peanuts are selected and handpicked. Small size peanuts and other dirt particles are rejected and removed.",
    },
    {
        title: "Continuous Roasting",
        avatar: "/assets/about-images/continuous.webp",
        image: "/assets/about-images/continuous.webp",
        description:
            "Handpicked peanuts are then roasted according to batch size. Proper process control is followed to get identical roasting of every peanut. Roasted peanuts are cooled down & blanched. 100% batch inspection is done to assure that Pintola’s customers get the top quality products.",
    },
    {
        title: "Grading of Peanuts",
        avatar: "/assets/about-images/sorting4.webp",
        image: "/assets/about-images/sorting4.webp",
        description:
        "Over-roasted peanuts are rejected under quality control process.",
    },
    {
        title: "Grinding",
        avatar: "/assets/about-images/grind.webp",
        image: "/assets/about-images/grind.webp",
        description:
            "Grinding of the roasted peanuts is done with USA imported stainless steel machinery to make ultra smooth paste.",
    },
    {
        title: "Lab Tested",
        avatar: "/assets/about-images/labtested.webp",
        image: "/assets/about-images/labtested.webp",
        description:
            "Every Batch is tested before dispatch so Pintola’s customers get 100% quality assured product.",
    },
];

export default Timeline;