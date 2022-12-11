import "./App.css";
import Countries from "./components/country/Countries";
import Country from "./components/country/Country";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
function App() {
  return (
    <div className="App">
      <Countries />
      <Country />
      <Products />
      <Product />
    </div>
  );
}

export default App;
