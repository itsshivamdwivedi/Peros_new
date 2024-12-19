import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";

export const createNewAdmin = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.email) {
    throw new Error("Email is required");
  }

  const newId = data?.email;

  await setDoc(doc(db, `admins/${newId}`), {
    ...data,
    id: newId,
    timestampCreate: Timestamp.now(),
  });
};

export const updateAdmin = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Name is required");
  }
  if (!data?.email) {
    throw new Error("Email is required");
  }

  await updateDoc(doc(db, `admins/${data?.id}`), {
    ...data,
  });
};

export const deleteAdmin = async ({ id }) => {
  await deleteDoc(doc(db, `admins/${id}`));
};
