//@ts-check
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const themeOropel = createTheme({
  palette:{
    mode: 'dark',
    primary:{
      main: '#4b3b42',
      light:'#9c8481'
    },
    secondary:{
      main: '#eafc9bd7',
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
  return (
    <ThemeProvider theme={themeOropel}>
    <div>
      <NavBar  />
      <ItemListContainer greeting={"¡Bienvenidos a Oropel!"}   />
    </div>
    </ThemeProvider>
  );
}

export default App;
