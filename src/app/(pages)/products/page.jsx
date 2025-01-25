// "use client";

<<<<<<< HEAD
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Plus, Minus } from "lucide-react";
// import { useAuth } from "@/contexts/AuthContext";
// import { useCart } from "@/contexts/CartContext"; 

// export default function ProductPage() {
//   const { user } = useAuth();
//   const { addToCart } = useCart(); 
//   const productId = uuidv4();
//   const product = {
//     id: productId,
//     title: "Sample Product",
//     shortDescription: "This is a sample product description with enhanced layout and style.",
//     featureImageURL: "/assets/creativity.png",
//     imageList: ["/assets/creativity.png", "/assets/exclusive.png"],
//     price: 20.0,
//     size:1,
//   };

//   const [selectedImage, setSelectedImage] = useState(product.featureImageURL);
//   const [quantity, setQuantity] = useState(1);
=======
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus, Minus } from "lucide-react"; 
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

export default function ProductPage() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const productId = uuidv4();
  const [variant, setVariant] = useState("Classic High Protein");
  const [size, setSize] = useState("350g");
  const [price, setPrice] = useState(170); // Default price for 350g
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const imagesByVariant = {
    "Classic High Protein": "/assets/creamy.png",
    "Dark Chocolate Liquid": "/assets/classic.png",
    "Dark Chocolate Crunchy": "/assets/choco.png",
  };

  const product = {
    id: productId,
    title: variant,
    shortDescription:
      "Smooth texture made with 100% roasted peanuts. Perfect for spreading on toast or baking.",
    featureImageURL: imagesByVariant[variant],
    imageList: Object.values(imagesByVariant),
  };

  const handleVariantChange = (newVariant) => {
    setVariant(newVariant);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(newSize === "350g" ? 170 : 475); // Update price based on size
  };
>>>>>>> f478c95bf734807d14dacbfa6b94968d65d5a27c

//   const handleIncrement = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const handleDecrement = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

<<<<<<< HEAD
//   const handleAddToCart = () => {
//     if (!user) {
//       alert("You must be logged in to add items to your cart.");
//       return;
//     }

//     const cartItem = {
//       id: product.id,
//       title: product.title,
//       quantity,
//       price: product.price,
//       image: selectedImage,
//       size:product.size,
//     };

//     addToCart(cartItem); // Use the addToCart function from CartContext
//     alert("Product added to cart successfully!");
//   };
=======
  const handleAddToCart = async () => {
    if (!user) {
      alert("You must be logged in to add items to your cart.");
      return;
    }

    setIsAdding(true);
    const cartItem = {
      id: product.id,
      title: product.title,
      quantity,
      price: price * quantity,
      image: product.featureImageURL,
    };

    await addToCart(cartItem);
    alert("Product added to cart successfully!");
    setIsAdding(false);
  };
>>>>>>> f478c95bf734807d14dacbfa6b94968d65d5a27c

//   return (
//     <main className="p-5 md:p-10 bg-gray-50">
//       <section className="flex flex-col md:flex-row gap-10 items-start">
//         <div className="flex-1">
//           <div className="relative">
//             <img
//               src={selectedImage}
//               alt="Selected Product"
//               className="w-full h-auto rounded-lg shadow-lg mb-4"
//             />
//             <div className="flex gap-2 overflow-x-auto">
//               {product.imageList.map((image) => (
//                 <img
//                   key={image}
//                   src={image}
//                   alt={`Thumbnail ${image}`}
//                   onClick={() => setSelectedImage(image)}
//                   className={`w-20 h-20 rounded-lg cursor-pointer shadow-md transition transform hover:scale-105 ${selectedImage === image ? "border-2 border-blue-600" : ""}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 space-y-6 bg-white p-6 rounded-lg shadow-lg">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
//             <p className="text-gray-600 mt-3 text-lg">{product.shortDescription}</p>
//           </div>

//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleDecrement}
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//               aria-label="Decrease Quantity"
//             >
//               <Minus size={18} />
//             </button>
//             <span className="text-xl font-semibold">{quantity}</span>
//             <button
//               onClick={handleIncrement}
//               className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//               aria-label="Increase Quantity"
//             >
//               <Plus size={18} />
//             </button>
//           </div>

//           <div className="flex gap-4">
//             <button
//               className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client"

import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";


function App() {
  return (
<<<<<<< HEAD
 
      <div >
          <Navbar/>
    <CartProvider>
     
      <Products />
      <div></div>
      
    </CartProvider>
 </div>
      


    
 
=======
    <main className="p-6 md:p-12 bg-gray-50">
      <section className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={product.featureImageURL}
            alt={variant}
            className="w-80 h-auto transition-transform transform hover:scale-105" // Smaller image size
          />
        </div>

        {/* Product Details Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-3">{product.shortDescription}</p>

          {/* Variant Tabs */}
          <div className="flex gap-4 mt-6">
            {["Classic High Protein", "Dark Chocolate Liquid", "Dark Chocolate Crunchy"].map(
              (v) => (
                <button
                  key={v}
                  onClick={() => handleVariantChange(v)}
                  className={`px-4 py-2 rounded-lg ${
                    variant === v ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {v}
                </button>
              )
            )}
          </div>

          {/* Size Selection */}
          <div className="flex gap-4 mt-6">
            {["350g", "1kg"].map((s) => (
              <button
                key={s}
                onClick={() => handleSizeChange(s)}
                className={`px-4 py-2 rounded-lg ${
                  size === s ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handleDecrement}
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Decrease Quantity"
            >
              <Minus size={20} />
            </button>
            <span className="text-2xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Increase Quantity"
            >
              <Plus size={20} />
            </button>
          </div>


          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-semibold text-gray-800">₹{price}</span>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`px-6 py-3 rounded-lg font-semibold text-white ${
                isAdding ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"
              }`}
            >
              {isAdding ? "Adding..." : "Add to Cart"}
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Prices include VAT, shipping calculated at checkout.
          </p>
        </div>
      </section>
    </main>
>>>>>>> f478c95bf734807d14dacbfa6b94968d65d5a27c
  );
}

export default App;



