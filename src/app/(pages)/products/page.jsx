"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus, Minus } from "lucide-react";
import { updateCarts } from "@/lib/firestore/user/write"; // Import Firestore write function
import { useAuth } from "@/contexts/AuthContext"; // Import Auth Context for user data
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductPage() {
  const { user } = useAuth(); // Access current user
  const productId = uuidv4();
  const product = {
    id: productId,
    title: "Sample Product",
    shortDescription:
      "This is a sample product description with enhanced layout and style.",
    featureImageURL: "/assets/creativity.png",
    imageList: ["/assets/creativity.png", "/assets/exclusive.png"],
  };

  const [selectedImage, setSelectedImage] = useState(product.featureImageURL);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert("You must be logged in to add items to your cart.");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      quantity,
    };

    try {
      // Add the cart item to Firestore under the user's document
      await updateCarts({
        uid: user.uid,
        list: [cartItem], // Append new cart item
      });
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <main className="p-5 md:p-10 bg-gray-50">
      <section className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Product Image Slider */}
        <div className="flex-1">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <div className="flex gap-2 overflow-x-auto">
              {product.imageList.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className={`w-20 h-20 rounded-lg cursor-pointer shadow-md transition transform hover:scale-105 ${
                    selectedImage === image ? "border-2 border-blue-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-3 text-lg">
              {product.shortDescription}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrement}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Decrease Quantity"
            >
              <Minus size={18} />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              aria-label="Increase Quantity"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
