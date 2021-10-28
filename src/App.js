import Main from "./components/Main";
import Basket from "./components/Basket";
import Header from "./components/Header";
import data from "./data";
import { useState } from "react";
import Product from "./components/product";

function App() {
  const { product } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (Product) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...Product, qty: 1 }]);
    }
  };
  const onRemove = (Product) => {
    const exist = cartItems.find((x) => x.id === Product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
