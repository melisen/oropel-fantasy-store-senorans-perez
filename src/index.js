import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContext from './Context/CartContext';
import { initializeApp } from "firebase/app";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeOropel = createTheme({
  palette:{
    mode: 'dark',
    primary:{
      main: '#698003d7',
      light:'#e0f193d7'
    },
    secondary:{
      main: '#ece6c3'
    },
    action:{
      active:'#ece6c3',
      hover:'#e0f193d7'
    }
  },
  typography:{
    fontFamily: 'Metamorphous',
    h3:{
      fontSize:"2rem",
      lineHeight:1.8
    },
    h5:{
      fontSize:"1.2rem",
      lineHeight:1.8,
      marginTop:8,
      marginBottom:8
    },
    button:{
      fontFamily: 'Modern Antiqua'
    },
    body1:{
      fontFamily: 'Joan'
    }
  }

})


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
  <ThemeProvider theme={themeOropel}>
    <CartContext>
        <App />
    </CartContext>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
