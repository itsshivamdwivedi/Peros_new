import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Update cart data for a user
export const updateCarts = async ({ uid, list }) => {
  const userRef = doc(db, `users/${uid}`);
  const userSnap = await getDoc(userRef);

  let existingCarts = [];
  if (userSnap.exists()) {
    existingCarts = userSnap.data().carts || [];
  }

  const updatedCarts = [...existingCarts, ...list];

  await setDoc(
    userRef,
    {
      carts: updatedCarts,
    },
    {
      merge: true,
    }
  );
};

// Get cart data for a user
export const getCarts = async (uid) => {
  try {
    const userRef = doc(db, `users/${uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().carts || []; // Return cart data if it exists, otherwise an empty array
    } else {
      return []; // Return an empty array if the user does not have a document
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return []; // Return an empty array in case of an error
  }
};
