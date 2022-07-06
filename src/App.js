//@ts-check
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useContext } from "react";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import Cart from"./Components/Cart/Cart.jsx";
import { MyCartContext } from "./Context/CartContext";




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


function App() {
  
  const cart = useContext(MyCartContext);


  return (
    <BrowserRouter>
    <ThemeProvider theme={themeOropel}>
 
    <div>
    <NavBar  />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos a Oropel!"} />} />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"¡Bienvenidos a Oropel!"}/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      

    </div>

    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
