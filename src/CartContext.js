import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartdata, setCartdata] = useState([
    {
      item_name:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      quantity: 1,
      item_img:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      id: 5,
    },
    {
      item_name: "Solid Gold Petite Micropave",
      price: 168,
      quantity: 1,
      item_img:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      id: 6,
    },
    {
      item_name: "White Gold Plated Princess",
      price: 9.99,
      quantity: 1,
      item_img:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      id: 7,
    },
    {
      item_name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      quantity: 1,
      item_img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      id: 10,
    },
    {
      item_name: "Mens Cotton Jacket",
      price: 55.99,
      quantity: 1,
      item_img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      id: 3,
    },
  ]);

  const setcartdata = (items) => {
    console.log(items);
    setCartdata(items);
  } 

  return (
    <CartContext.Provider value={{cartdata, setcartdata}}>
      {props.children}
    </CartContext.Provider>
  );
};
