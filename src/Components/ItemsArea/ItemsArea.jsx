import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const ItemsArea = ({ category, setiteminfo }) => {
  const API = "https://fakestoreapi.com/products/category/";

  const [items, setitems] = useState(null);
  const [showitems, setshowitems] = useState(false);

  useEffect(() => {
    fetch(API + category.selectedcategory)
      .then((res) => res.json())
      .then((data) => {
        setitems(data);
        setshowitems(true);
      });
  }, [category.selectedcategory]);

  return (
    <div class="md:col-span-3 bg-gray-100 rounded-md p-5">
      <span class="text-lg font-serif font-bold border-l-2 border-black px-1 ">
        Showing results for {category.selectedcategory}
      </span>
      <div class="md:grid grid-cols-3 gap-5 py-3">
        {showitems &&
          items.map((data, i) => (
            <div key={i}>
              <ItemCard
                setiteminfo={setiteminfo}
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
