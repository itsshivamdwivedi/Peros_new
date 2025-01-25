// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import Add from "@/components/Add";
//  import { useCart } from "@/components/CartContext";
//  import gsap from "gsap";
 


// type Size = {
//   label: string;
//   price: number;
// };

// type Variant = {
//   id: string;
//   name: string;
//   images: string[];
//   description: string;
//   sizes: Size[];
// };

// const peanutButterVariants: Variant[] = [
//   {
//     id: "classic-creamy",
//     name: "Classic Creamy",
//     images: [
//       "https://pintola.in/cdn/shop/files/All_Natural_Creamy_350gm_600x600_9d3cc337-ace9-4fed-bc7f-1cbfd070ecfe_800x.jpg?v=1732017216",
//       "https://pintola.in/cdn/shop/files/5_5889f889-bf4e-4a24-b174-4021b6876569_800x.jpg?v=1717500086",
//       "https://pintola.in/cdn/shop/files/4_eb5c4e78-2ace-40d7-9733-b429a05385fb_800x.jpg?v=1717500086",
//       "https://pintola.in/cdn/shop/files/3_608fdb9f-4645-4a9f-a845-8231908e313a_800x.jpg?v=1717500086",
  
//     ],
//     description:
//       "Smooth texture made with 100% roasted peanuts. Perfect for spreading on toast or baking.",
//     sizes: [
//       { label: "350g", price: 157 },
//       { label: "1kg", price: 475 },
//     ],
//   },
//   {
//     id: "crunchy-honey",
//     name: "Crunchy Honey",
//     images: [
//       "https://pintola.in/cdn/shop/files/High_Protein_Dark_Chocolate_Crunchy_510gm_600x600_a824f0ab-a9dd-4120-8b4c-3ff571aeb645_800x.jpg?v=1732089677",
//       "https://pintola.in/cdn/shop/files/2_da518d19-2b8a-4b35-8603-b9f7cd98c197_800x.jpg?v=1719218129",
//       "https://pintola.in/cdn/shop/files/3_07f4ce1d-71f1-41a9-965e-b2f610db4c91_800x.jpg?v=1719218129",
//       "https://pintola.in/cdn/shop/files/4_d40c22de-8db0-44db-9365-c893c7469bf2_800x.jpg?v=1719218129",
  
//     ],
//     description:
//       "Chunky texture with real peanut bits and a touch of honey for natural sweetness.",
//     sizes: [
//       { label: "350g", price: 170 },
//       { label: "1kg", price: 500 },
//     ],
//   },
//   {
//     id: "dark-chocolate",
//     name: "Dark Chocolate",
//     images: [
//       "https://i.ibb.co/GvGs8H9/fil.jpg",
//       "https://pintola.in/cdn/shop/files/HPOatslisting-3_800x.jpg?v=1719222911",
//       "https://pintola.in/cdn/shop/files/HPOatslisting-4_800x.jpg?v=1719222911",
//       "https://pintola.in/cdn/shop/files/HPOatslisting-5_dc9f45ae-ddf2-43ad-a357-e3dca5a95fcf_800x.jpg?v=1719222911",
      
//     ],
//     description:
//       "A blend of peanuts, dark cocoa, and sea salt for a rich, indulgent flavor.",
//     sizes: [
//       { label: "350g", price: 180 },
//       { label: "1kg", price: 525 },
//     ],
//   },
// ];

// const Products: React.FC = () => {

//     const [quantity, setQuantity] = useState(1);
  
//     const increaseQuantity = () => setQuantity((prev) => prev + 1);
//     const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   const [selectedVariant, setSelectedVariant] = useState<Variant>(
//     peanutButterVariants[0]
//   );
//   const [currentImage, setCurrentImage] = useState<string>(
//     selectedVariant.images[0]
//   );
//   const [selectedSize, setSelectedSize] = useState<Size>(
//     selectedVariant.sizes[0]
//   );


  // const boxRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (boxRef.current) {
  //     // GSAP animation: right to left
  //     gsap.fromTo(
  //       boxRef.current,
  //       { x: '100%', opacity: 0 }, // Start offscreen to the right
  //       { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' } // Slide to center
  //     );
  //   }
  // }, []);

  // const leftBoxRef = useRef<HTMLDivElement>(null);
  // const rightBoxRef = useRef<HTMLDivElement>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Loading screen duration: 3 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   if (loading) {
  //     // GSAP animation: left and right boxes
  //     gsap.fromTo(
  //       leftBoxRef.current,
  //       { x: '-100%', opacity: 0 },
  //       { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
  //     );

  //     gsap.fromTo(
  //       rightBoxRef.current,
  //       { x: '100%', opacity: 0 },
  //       { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
  //     );
  //   }
  // }, [loading]);



//   // 
  


  
//   const handleVariantClick = (variantId: string) => {
//     const variant = peanutButterVariants.find((v) => v.id === variantId);
//     if (variant) {
//       setSelectedVariant(variant);
//       setCurrentImage(variant.images[0]);
//       setSelectedSize(variant.sizes[0]);
//     }
//   };


  

//   const handleSizeClick = (sizeLabel: string) => {
//     const size = selectedVariant.sizes.find((s) => s.label === sizeLabel);
//     if (size) {
//       setSelectedSize(size);
//     }
//   };

//   return (
//    <div className=" w-full " >
//      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 mt-4">
//       <div className="w-full lg:w-1/2 lg:sticky top-20 h-max " ref={leftBoxRef}>
//         <div className="h-[500px] relative ">
//           <Image
//             src={currentImage}
//             alt={selectedVariant.name}
//             fill
//             className="object-cover rounded-md"
//           />
//         </div>
//         <div className="flex  mt-4      ">
//           {selectedVariant.images.map((image, index) => (
//             <img
//               key={`${selectedVariant.id}-image-${index}`} // Unique key for each thumbnail
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               className={`w-1/4 h-32 relative px-1  gap-4 mt-8 rounded cursor-pointer  object-cover transition-transform duration-300 transform hover:scale-110  ${
//                 currentImage === image ? "" : "opacity-20"
//               }`}
//               onClick={() => setCurrentImage(image)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2"  ref={boxRef}>
//         <h1 className="text-3xl font-bold mb-4">{selectedVariant.name}</h1>
//         <p className="text-lg text-gray-500 mb-4">{selectedVariant.description}</p>
//         <h2 className="text-3xl font-bold ">₹{selectedSize.price} <span className="text-red-500 font-medium text-xl">-10%</span>
//         </h2>
//         <div className='flex items-center gap-4'>  <h3 className=' line-through text-gray-400'>M.R.P: ₹175 </h3>
//                 <h3 className=' text-gray-500 '> (Inclusive all taxes)  </h3>
//                 </div>

//                 <div className="flex flex-col gap-6 mt-4">
//                 <h4 className='font-medium'> Variant</h4>
//                 <div className="flex items-center justify-between w-full gap-3">
//                 {peanutButterVariants.map((variant) => (
//             <button
//               key={`variant-${variant.id}`} // Unique key for variants
//               onClick={() => handleVariantClick(variant.id)}
//               className={` font-bold text-sm rounded-md h-[8vh] py-1 px-4 hover:bg-amber-400 cursor-pointer  ${
//                 variant.id === selectedVariant.id
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {variant.name}
//             </button>
//           ))}

//                 </div>
        
//         </div>

        
//         <div className="flex flex-col gap-6 mt-4">
//         <h4 className='font-medium'> Size</h4>
//         <div className="flex items-center gap-3">
//         {selectedVariant.sizes.map((size) => (
//             <button
//               key={`${selectedVariant.id}-size-${size.label}`} // Unique key for sizes
//               onClick={() => handleSizeClick(size.label)}
//               className={`font-bold text-sm rounded-md  py-1 px-4 hover:bg-amber-400 cursor-pointer ${
//                 selectedSize.label === size.label
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {size.label}
//             </button>
//           ))}

//         </div>
//         <div><div className='flex flex-col gap-4'>
//       <div className='flex items-center  justify-between mt-4 overflow-hidden rounded-md ring-1 ring-black md:w-[18vw] '>
//         <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white"onClick={decreaseQuantity} >-</button>
//        <span className=''> {quantity}</span>
//         <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white" onClick={increaseQuantity}>+</button>

//       </div>
      
//       <div className=' sm:flex sm:flex-row gap-3 flex flex-col  '>
     
//       <div><button className='w-full text-sm md:w-[18vw] disabled:bg-pink-200 disabled:text-white disabled:ring-none ring-1 bg-green-500 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-amber-400 disabled:cursor-not-allowed'
        
        
        
//         >Add to Cart </button></div>
        
//       <div className=''>  <button className='w-full md:w-[18vw] text-sm disabled:bg-pink-200 disabled:text-white bg-green-500 text-white hover:bg-amber-400 disabled:ring-none rounded-md ring-1 font-semibold ring-green-500 px-4 py-2 disabled:cursor-not-allowed '
//         >Buy it now</button>  </div>
//       </div>
//     </div>


       
         
         
 

// </div>
      

        
//         </div>
//        <div className="flex-col flex mt-5 gap-4">
//        <div className='sm'>
//                     <p>We created a perfect combination of health deliciousness with roasted peanuts, imported Whey protein and Dark Chocolate. The Whey protein being used is being imported from the world's top dairy based in Europe!</p>
                  
                    
//                 </div>
//                 <div className='sm'>
//                    <p>High Protein Dark Chocolate Peanut Butter has been created carefully for fitness freaks and gym-goers. They simply can't get enough of this perfect creation!! The deliciousness of dark chocolate added to the all-natural peanut paste and imported whey protein makes this product the best addition to a diet, one can ever ask for. High in protein and fibre, and ZERO in trans fat.</p>
                  
                    
//                 </div>
//                 <div className='sm'>
//                     <p>All PINTOLA® Products are made up of the finest grade, fresh and nutritious ingredients from an ISO 22000 Certified and FSSAI approved Factory.</p>
                    
//                 </div>
//                 <div className='sm'>
//                     <p>We manufacture India’s favorite Nut Butters daily so that you get the freshest product every time you buy one. "Suitable for all age groups".</p>
                    
//                 </div>
//                 <div className='sm'>
//                     <p>Ideal for Gym & Fitness Enthusiasts, Athletes & all Foodies!</p>
                    
//                 </div>
//                 <div className='sm flex gap-1'>
//                     <h4 className='font-semibold'>Shelf Life:</h4>
//                    <p>9 Months</p>
                    
//                 </div>
//        </div>


      

        
       

       

       
       
//       </div>
     
    
  
//     </div>
//     <div className="border-b-4 border-green-500  py-5  mx-[40vw]"></div>
//     <div>
//       <img src="https://pintola.in/cdn/shop/files/1_720a96fd-0b37-4c89-9aab-b9bb879212d8_1800x.jpg?v=1691842841"  className="mt-8 object-cover w-[100%] "   alt=""   />
      
     
     
     
   
//     </div>
//     <div > <img src="https://pintola.in/cdn/shop/files/2_7964a787-3593-4dcb-8e4a-f9b2cca2c1ad_1800x.jpg?v=1691842840" alt=" " className=" object-cover w-[100%]" /></div>
//     <div>  <img src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841" alt=" " className=" object-cover w-[100%]" /></div>
//     <div>  <img src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841" alt=" " className=" object-cover w-[100%]" /></div>
//     <div>  <img src="https://pintola.in/cdn/shop/files/6_1d7254c5-1104-4f44-aef6-5ad9f009fa1b_2000x.jpg?v=1691842840" alt=" " className=" object-cover w-[100%]" /></div>
//     <div>     <img src="httpss://pintola.in/cdn/shop/files/5_37541bb8-6291-4fe4-97de-0e8f7c730326_2000x.jpg?v=1691842841" alt=" " className=" object-cover w-[100%]" /></div>
//    </div>
      
//   );
// };

// export default Products;


"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "@/contexts/CartContext"; 
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";


type Size = {
  label: string;
  price: number;
  pricel: number;
};

type Variant = {
  id: string;
  name: string;
  images: string[];
  description: string;
  sizes: Size[];
};

const peanutButterVariants: Variant[] = [
  {
        id: "classic-creamy",
        name: "Classic Creamy",
        images: [
          "https://pintola.in/cdn/shop/files/All_Natural_Creamy_350gm_600x600_9d3cc337-ace9-4fed-bc7f-1cbfd070ecfe_800x.jpg?v=1732017216",
          "https://pintola.in/cdn/shop/files/5_5889f889-bf4e-4a24-b174-4021b6876569_800x.jpg?v=1717500086",
          "https://pintola.in/cdn/shop/files/4_eb5c4e78-2ace-40d7-9733-b429a05385fb_800x.jpg?v=1717500086",
          "https://pintola.in/cdn/shop/files/3_608fdb9f-4645-4a9f-a845-8231908e313a_800x.jpg?v=1717500086",
      
        ],
        description:
          "Smooth texture made with 100% roasted peanuts. Perfect for spreading on toast or baking.",
        sizes: [
          { label: "350g", price: 157 ,pricel:200},
          { label: "1kg", price: 475,pricel:500},
        ],
      },
      {
        id: "crunchy-honey",
        name: "Crunchy Honey",
        images: [
          "https://pintola.in/cdn/shop/files/High_Protein_Dark_Chocolate_Crunchy_510gm_600x600_a824f0ab-a9dd-4120-8b4c-3ff571aeb645_800x.jpg?v=1732089677",
          "https://pintola.in/cdn/shop/files/2_da518d19-2b8a-4b35-8603-b9f7cd98c197_800x.jpg?v=1719218129",
          "https://pintola.in/cdn/shop/files/3_07f4ce1d-71f1-41a9-965e-b2f610db4c91_800x.jpg?v=1719218129",
          "https://pintola.in/cdn/shop/files/4_d40c22de-8db0-44db-9365-c893c7469bf2_800x.jpg?v=1719218129",
      
        ],
        description:
          "Chunky texture with real peanut bits and a touch of honey for natural sweetness.",
        sizes: [
          { label: "350g", price: 170,pricel:200},
          { label: "1kg", price: 500,pricel:550},
        ],
      },
      {
        id: "dark-chocolate",
        name: "Dark Chocolate",
        images: [
          "https://i.ibb.co/GvGs8H9/fil.jpg",
          "https://pintola.in/cdn/shop/files/HPOatslisting-3_800x.jpg?v=1719222911",
          "https://pintola.in/cdn/shop/files/HPOatslisting-4_800x.jpg?v=1719222911",
          "https://pintola.in/cdn/shop/files/HPOatslisting-5_dc9f45ae-ddf2-43ad-a357-e3dca5a95fcf_800x.jpg?v=1719222911",
          
        ],
        description:
          "A blend of peanuts, dark cocoa, and sea salt for a rich, indulgent flavor.",
        sizes: [
          { label: "350g", price: 180,pricel:210},
          { label: "1kg", price: 525,pricel:600}
        ],
      },
];

const Products: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    peanutButterVariants[0]
  );
  const [currentImage, setCurrentImage] = useState<string>(
    selectedVariant.images[0]
  );
  const [selectedSize, setSelectedSize] = useState<Size>(
    selectedVariant.sizes[0]
  );


  const descriptionRef = useRef<HTMLDivElement>(null);
  const variantsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const watchImage = document.querySelector(".watch-image");

   
    gsap.fromTo(
      watchImage,
      {
        rotation: 0,
        scale: 1,  
      },
      {
        rotation: 360, 
        scale: 1.5,    
        scrollTrigger: {
          trigger: watchImage,
          start: "top top",    
          end: "+=200%",      
          scrub: 1,          
          pin: true,          
          anticipatePin: 1,   
        },
        duration: 3,
      }
    );
  }, []);


  useEffect(() => {
   
    gsap.to(".layer-1", {
      yPercent: -20, 
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom", 
        end: "bottom bottom", 
        scrub: true,
      },
    });

    gsap.to(".layer-2", {
      yPercent: -40, 
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(".layer-3", {
      yPercent: -60, 
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);


  


  
  
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
          },
        }
      );
    }

   
  }, []);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
    
      gsap.fromTo(
        boxRef.current,
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' } 
      );
    }
  }, []);

  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
     
      gsap.fromTo(
        leftBoxRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
      );

      gsap.fromTo(
        rightBoxRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, [loading]);



  const { addToCart } = useCart(); 

  const handleVariantClick = (variantId: string) => {
    const variant = peanutButterVariants.find((v) => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
      setCurrentImage(variant.images[0]);
      setSelectedSize(variant.sizes[0]);
    }
  };

  const handleSizeClick = (sizeLabel: string) => {
    const size = selectedVariant.sizes.find((s) => s.label === sizeLabel);
    if (size) {
      setSelectedSize(size);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: selectedVariant.id,
      title: `${selectedVariant.name} - ${selectedSize.label}`,
      quantity,
      price: selectedSize.price,
      image: currentImage,
      size:selectedSize.label,
      pricel:selectedSize.pricel,
    };
    addToCart(cartItem); 

  };

  return (
    
    <div className="w-full ">
      
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 mt-4 ">
      
        <div className="w-full lg:w-1/2  lg:sticky top-20 h-max" ref={leftBoxRef}>
          <div className="h-[500px] relative">
            <Image
              src={currentImage}
              alt={selectedVariant.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex mt-4">
            {selectedVariant.images.map((image, index) => (
              <img
                key={`${selectedVariant.id}-image-${index}`}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-1/4 h-32 px-1 mt-8 rounded cursor-pointer object-cover transition-transform duration-300 transform hover:scale-110 ${
                  currentImage === image ? "" : "opacity-20"
                }`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2" ref={boxRef}>
          <h1 className="text-3xl font-bold mb-4 font-serif">{selectedVariant.name}</h1>
          <p className="text-lg text-gray-500 mb-4 ">{selectedVariant.description}</p>
          <h2 className="text-3xl font-bold">
            ₹{selectedSize.price} <span className="text-red-500 font-medium text-xl">-10%</span>
          </h2>
          <div className="flex items-center gap-4 ">
            <h3 className="line-through text-gray-400">M.R.P: ₹{selectedSize.pricel}</h3>
            <h3 className="text-gray-500">(Inclusive of all taxes)</h3>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <h4 className=" font-semibold font-serif">Variant</h4>
            <div className="flex items-center justify-between w-full gap-3">
              {peanutButterVariants.map((variant) => (
                <button
                              key={`variant-${variant.id}`}
                              onClick={() => handleVariantClick(variant.id)}
                              className={` font-bold text-sm rounded-md h-[8vh] py-1 px-4 hover:bg-amber-400 cursor-pointer font-serif  ${
                                variant.id === selectedVariant.id
                                  ? "bg-green-500 text-white"
                                  : "bg-gray-200"
                              }`}
                            >
                              {variant.name}
                            </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <h4 className="font-semibold font-serif">Size</h4>
            <div className="flex items-center gap-3">
              {selectedVariant.sizes.map((size) => (
                <button
                  key={size.label}
                  onClick={() => handleSizeClick(size.label)}
                  className={`py-1 px-4 rounded-md font-semibold ${
                    selectedSize.label === size.label
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
         

         
          <div>
          <div className='flex flex-col gap-4'>
          <div className='flex items-center  justify-between mt-4 overflow-hidden rounded-md ring-1 ring-black md:w-[18vw] '>
      <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white"onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))} >-</button>
     <span className=''> {quantity}</span>    
        <button  className="cursor-pointer flex justify-center content-center    bg-green-500 w-[10vw] lg:w-10 sm:w-10  2xl:w-20 font-bold text-3xl items-center text-white"onClick={() => setQuantity((prev) => prev + 1)}>+</button>   
          </div>
          <div className=' sm:flex sm:flex-row gap-3 flex flex-col  '>
     
     <div><button className='w-full text-sm md:w-[18vw] disabled:bg-pink-200 disabled:text-white disabled:ring-none ring-1 bg-green-500 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-amber-400 disabled:cursor-not-allowed'
       
       onClick={handleAddToCart}
       
       >Add to Cart </button></div> 
       <div className=''> <Link href ="/cart"> <button className='w-full md:w-[18vw] text-sm disabled:bg-pink-200 disabled:text-white bg-green-500 text-white hover:bg-amber-400 disabled:ring-none rounded-md ring-1 font-semibold ring-green-500 px-4 py-2 disabled:cursor-not-allowed '
        onClick={handleAddToCart} >Buy it now</button></Link>  </div>


          
</div>

          
        </div>

      </div>


    </div>

    <div className="flex-col flex mt-5 gap-4" ref={descriptionRef}>
       <div className='sm' >
                    <p>We created a perfect combination of health deliciousness with roasted peanuts, imported Whey protein and Dark Chocolate. The Whey protein being used is being imported from the world's top dairy based in Europe!</p>
                  
                    
                </div>
                <div className='sm' >
                   <p>High Protein Dark Chocolate Peanut Butter has been created carefully for fitness freaks and gym-goers. They simply can't get enough of this perfect creation!! The deliciousness of dark chocolate added to the all-natural peanut paste and imported whey protein makes this product the best addition to a diet, one can ever ask for. High in protein and fibre, and ZERO in trans fat.</p>
                  
                    
                </div>
                <div className='sm'>
                    <p>All PINTOLA® Products are made up of the finest grade, fresh and nutritious ingredients from an ISO 22000 Certified and FSSAI approved Factory.</p>
                    
                </div>
                <div className='sm'>
                    <p>We manufacture India’s favorite Nut Butters daily so that you get the freshest product every time you buy one. "Suitable for all age groups".</p>
                    
                </div>
                <div className='sm'>
                    <p>Ideal for Gym & Fitness Enthusiasts, Athletes & all Foodies!</p>
                    
                </div>
                <div className='sm flex gap-1'>
                    <h4 className='font-semibold'>Shelf Life:</h4>
                   <p>9 Months</p>
                    
                </div>
       </div>


      

        
       

       

       
       
      </div>
     
    
  
    </div>
    <div className="border-b-4 border-green-500  py-5  mx-[40vw]" ></div>






    
      <div className="flex flex-col ">
     
    
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/1_720a96fd-0b37-4c89-9aab-b9bb879212d8_1800x.jpg?v=1691842841"
          className="image object-cover w-full"
          alt="Image 1"
        />
        
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/2_7964a787-3593-4dcb-8e4a-f9b2cca2c1ad_1800x.jpg?v=1691842840"
          className="image object-cover w-full"
          alt="Image 2"
        />  
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841"
          className="image object-cover w-full"
          alt="Image 3"
        />  
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841"
          className="image object-cover w-full"
          alt="Image 4"
        />  
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841"
          className="image object-cover w-full"
          alt="Image 4"
        />  
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://pintola.in/cdn/shop/files/4_cd065e62-cce8-41dd-a2d4-7bbb474b2050_1800x.jpg?v=1691842841"
          className="image object-cover w-full"
          alt="Image 4"
        />  
      </div>
     
    </div>
    
   
    


   </div>



  );
};

export default Products;
