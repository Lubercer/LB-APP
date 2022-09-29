import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMmb2oOMwKi5gZjYiwJEsbMY5_FF3QAI0",
    authDomain: "onlygirlstattoo-app.firebaseapp.com",
    projectId: "onlygirlstattoo-app",
    storageBucket: "onlygirlstattoo-app.appspot.com",
    messagingSenderId: "776159125293",
    appId: "1:776159125293:web:1fe12c6e20a13bdbffbda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
