// import { db } from "@/lib/firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";


// export const updateCarts = async ({ uid, list }) => {
//   const userRef = doc(db, users/$,{uid});
//   const userSnap = await getDoc(userRef);

//   let existingCarts = [];
//   if (userSnap.exists()) {
//     existingCarts = userSnap.data().carts || [];
//   }

//   const updatedCarts = [...existingCarts, ...list];

//   await setDoc(
//     userRef,
//     {
//       carts: updatedCarts,
//     },
//     {
//       merge: true,
//     }
//   );
// };


// export const getCarts = async (uid) => {
//   try {
//     const userRef = doc(db, users/$,{uid});
//     const userSnap = await getDoc(userRef);

//     if (userSnap.exists()) {
//       return userSnap.data().carts || []; 
//     } else {
//       return []; 
//     }
//   } catch (error) {
//     console.error("Error fetching cart data:", error);
//     return []; 
//   }
// };
// export const createUser = async ({ uid, displayName, photoURL }) => {
//   const userRef = doc(db, users/$,{uid});
//   try {
//     await setDoc(
//       userRef,
//       {
//         uid,
//         displayName,
//         photoURL,
//       },
//       { merge: true } 
//     );
//     console.log("User created/updated successfully");
//   } catch (error) {
//     console.error("Error creating/updating user:", error);
//     throw error; 
//   }
// };




import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";


export const updateCarts = async ({ uid, list }) => {
  const userRef = doc(db, "users", uid);
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

export const getCarts = async (uid) => {
  try {
    const userRef = doc(db, "users", uid); 
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().carts || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return [];
  }
};


export const createUser = async ({ uid, displayName, photoURL }) => {
  const userRef = doc(db, "users", uid);
  try {
    await setDoc(
      userRef,
      {
        uid,
        displayName,
        photoURL,
      },
      { merge: true }
    );
    console.log("User created/updated successfully");
  } catch (error) {
    console.error("Error creating/updating user:", error);
    throw error;
  }
};