import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemsListContainer';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola este es mi e-commerce de productos de supermercado"}/>
    </div>
  );
}

export default App;
