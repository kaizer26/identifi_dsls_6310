/*************************************************
 * firebase.js
 * Inisialisasi Firebase & Firestore
 *************************************************/

// 🔥 GANTI dengan config Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyBCnTPfLGCI_XZHWBLXBY3SW1utZA9rP0o",
  authDomain: "fire-setup-12c7f.firebaseapp.com",
  projectId: "fire-setup-12c7f",
  storageBucket: "fire-setup-12c7f.firebasestorage.app",
  messagingSenderId: "586840722320",
  appId: "1:586840722320:web:705ca0a10b4332e4ddc115",
  measurementId: "G-XDT9B0SY4Q"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// Koleksi untuk tagging publik
const COLLECTION_NAME = "tagging_lokasi";
