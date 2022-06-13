//@ts-check
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/ItemListContainer"


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos a Oropel!"}/>
    </div>
  );
}

export default App;
