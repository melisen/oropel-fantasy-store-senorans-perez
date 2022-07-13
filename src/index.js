import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContext from './Context/CartContext';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZauqMOYEqUjG36oE3DHarXBjwfflDA-o",
  authDomain: "oropel-senorans.firebaseapp.com",
  projectId: "oropel-senorans",
  storageBucket: "oropel-senorans.appspot.com",
  messagingSenderId: "36545504344",
  appId: "1:36545504344:web:ee701bfb84a0c03594962d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContext>
        <App />
    </CartContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
