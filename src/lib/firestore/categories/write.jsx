import { db } from "@/lib/firebase";
import { collection, doc, setDoc, Timestamp, updateDoc,deleteDoc } from "firebase/firestore";

export const createNewCategory = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.slug) {
    throw new Error("Slug is required");
  }
  const newId = doc(collection(db, `ids`)).id;

  await setDoc(doc(db, `categories/${newId}`), {
    ...data,
    id: newId,
    timestampCreate: Timestamp.now(),
  });
};
export const deleteCategory = async ({ id }) => {
    if (!id) {
      throw new Error("ID is required");
    }
  
    try {
      const categoryDoc = doc(db, "categories", id);
      await deleteDoc(categoryDoc); // This deletes the category document from Firestore
    } catch (error) {
      throw new Error("Error deleting category: " + error.message);
    }
  };
export const updateCategory = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.slug) {
    throw new Error("Slug is required");
  }
  if (!data?.id) {
    throw new Error("ID is required");
  }

  await updateDoc(doc(db, `categories/${data.id}`), {
    ...data,
    timestampUpdate: Timestamp.now(),
  });
};
