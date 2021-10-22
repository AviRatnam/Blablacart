import { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
//import {selectedcategory} from "../Sidebar/Sidebar";

const ItemsArea = () => {
  const API = "https://fakestoreapi.com/products/category/";

  const [items, setitems] = useState(null);
  const [showitems, setshowitems] = useState(false);

  const itemcategory = "electronics";

  useEffect(() => {
    fetch(API + itemcategory)
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
        setshowitems(true);
      });
  }, []);

  return (
    <div class="md:col-span-3 bg-gray-100 rounded-md p-5">
      <span class="text-lg font-serif font-bold border-l-2 border-black px-1 ">
        Showing results for {itemcategory}
      </span>
      <div class="md:grid grid-cols-3 gap-3">
        {showitems &&
          items.map((data) => (
            <div>
              <ItemCard
                img={data.image}
                title={data.title}
                price={data.price}
              />
            </div>
          ))}
      </div>    
    </div>
  );
};

export default ItemsArea;
