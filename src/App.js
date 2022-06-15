//@ts-check
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const themeOropel = createTheme({
  palette:{
    mode: 'dark',
    primary:{
      main: '#4b3b42'
    },
    /*
    text:{
      primary:'#e6b95e'
    }
    */
  },
  typography:{
    fontFamily: 'Metamorphous',
    
  }

})


function App() {
  return (
    <ThemeProvider theme={themeOropel}>
    <div>
      <NavBar  />
      <ItemListContainer greeting={"¡Bienvenidos a Oropel!"}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
