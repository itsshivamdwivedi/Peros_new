"use client"

import Navbar from "@/components/Navbar";
import Hom from "@/components/Hom"
import Footer from "@/components/Footer";
import Content from "@/components/Content";

const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Shivam Dwivedi",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Vishal Tiwari",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Piyush Sharma",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Harsh Gupta",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Akash Kamble",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Virat Kohli",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Rohit Sharma",
      role: "CEO at Company",
      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];
export default function Home(){
    return (
       
    <main  className="">
    

        
      
      <div>
      <Navbar/>
     
      <Hom/>
      <Content/>


      <Footer/>
      
      
     
      </div>

      
    



    
    
     


        
      
    </main>

    );
}