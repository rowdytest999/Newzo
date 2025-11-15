// Firebase frontend config (exactly as provided)
const firebaseConfig = {
  apiKey: "AIzaSyDSvES--UlIZeK_PHzW8qAJ59hsLx5oNxg",
  authDomain: "newzo-app.firebaseapp.com",
  projectId: "newzo-app",
  storageBucket: "newzo-app.firebasestorage.app",
  messagingSenderId: "989417959878",
  appId: "1:989417959878:web:bbf1d06527122e3e7a02c7"
};

if (!window.firebase || !firebase.apps) {
  console.error('Firebase SDK not loaded');
} else {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
