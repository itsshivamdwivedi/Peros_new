import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
