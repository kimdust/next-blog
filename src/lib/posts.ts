// src/lib/posts.ts
import { db } from "@/firebase/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

export const getAllPostIds = async (): Promise<
  { params: { id: string } }[]
> => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map((doc) => ({
    params: { id: doc.id },
  }));
};

export const getPostById = async (id: string): Promise<Post | null> => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Post;
  } else {
    return null;
  }
};
