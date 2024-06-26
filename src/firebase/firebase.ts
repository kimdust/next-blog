import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhtiuiGogYIPf2jCpX9kFRhmFarbbO1TY",
  authDomain: "next-blog-app-a9192.firebaseapp.com",
  projectId: "next-blog-app-a9192",
  storageBucket: "next-blog-app-a9192.appspot.com",
  messagingSenderId: "797415855688",
  appId: "1:797415855688:web:f9d28d2de0c70cb8e56a7d",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 인증 서비스 인스턴스 생성
export const auth = getAuth(app);

// Firestore 서비스 인스턴스 생성
export const db = getFirestore(app); // Firestore 인스턴스를 추가하고 export합니다.
