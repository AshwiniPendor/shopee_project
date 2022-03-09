import { useState } from "react";
import { useQuery } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";

import Home from "./Home/Home";

export type CartItemType = {
  id: number;
  description: string;
  category: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => await (await fetch("http://fakestoreapi.com/products")).json();

export const App = () => {
 // const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, items) => ack + items.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
       
          <Route path="/" element={<Home />} />
        
          <Route
            path="/cart"
            element={
              <Cart
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                cartItems={ cartItems }
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/item" element={ <Item 
            item={ data }
            handleAddToCart={ handleAddToCart }

          />
          } 
           />
         
        </Routes>
      </Router>
      {/* <Footer />  */}
    </>
  );
};

export default App;
