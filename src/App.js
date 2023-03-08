import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer"; //rafce short hand
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
 
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data.products);
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div style={{display: "flex"}}>
    <Products state={state} dispatch={dispatch} />
    <Cart state={state} dispatch={dispatch} />
  </div>;
}

export default App;
