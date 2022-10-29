import { useEffect, useState, createContext} from "react";
import ProductsList from "./Components/ProductsList/ProductsList";
import ProductItem from "./Components/ProductItem/ProductItem";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import { Link } from "react-router-dom";
export let ShoppingCartContext = createContext();

let css = {
      display: "grid",
      gridTemplateColumns: "55% 35%",
      justifyItems: "end",
      alignItems: "center",
      padding: "10px 0 20px 0"
}

let svg = {
  color: "#282828"
}

function App() {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
 
  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, [] );

  return (   
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      <nav style={css}><Link to="/"><img src={require('../src/logo.png')}></img></Link><Link to="/cart"><div><svg style={svg} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></div></Link></nav>
      <Routes>
        <Route path="/" element={<ProductsList>
        {products.map(function (product) {
          return (
              <ProductItem product={product} key={product.id}></ProductItem>
          )
        })}
      </ProductsList>}/>

        <Route path="/details/:id" element={<ProductDetails></ProductDetails>}></Route>

        <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
      </Routes>
    </ShoppingCartContext.Provider>
    
  );
}

export default App;
