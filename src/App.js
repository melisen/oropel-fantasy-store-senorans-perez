//@ts-check
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"


const themeOropel = createTheme({
  palette:{
    mode: 'dark',
    primary:{
      main: '#4b3b42',
      light:'#9c8481'
    },
    secondary:{
      main: '#e0f193d7'
    }
    
  },
  typography:{
    fontFamily: 'Metamorphous',
    h5:{
      fontSize:"1.2rem",
      lineHeight:1.8
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

  //SACAR ITEMDETAILCONTAINER SUELTO
  return (
    <BrowserRouter>
    <ThemeProvider theme={themeOropel}>
    <div>
    <NavBar  />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos a Oropel!"} />} />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"¡Bienvenidos a Oropel!"}/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
      
      <ItemDetailContainer />
    </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
