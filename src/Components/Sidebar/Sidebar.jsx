import { useEffect, useState } from "react";
import ItemsArea from "../ItemsArea/ItemsArea";
import categorystyles from "./CategoryStyles";

const SideBar = () => {
  const API = "https://fakestoreapi.com/products/categories";

  const [categories, setcategories] = useState(null);
  const [showcategories, setshowcategories] = useState(true);
  const [selectedcategory, setselectedcategory] = useState("jewelery");
  const [iteminfo, setiteminfo] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setcategories(data);
        setshowcategories(false);
      });
  }, []);

  // console.log(selectedcategory);

  return (
    <>
      <div class="md:col-span-1 bg-gray-100 rounded-md p-5">
        <span class="text-lg font-serif font-bold border-l-2 border-black px-1">
          Categories:
        </span>
        <div class="py-2">
          {showcategories ? (
            <div>
              <div class="font-bold">Loading...</div>
            </div>
          ) : (
            categories.map((data, i) => (
              <div
                key={i}
                class={categorystyles}
                onClick={() => setselectedcategory(data)}
              >
                <span>- {data}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <ItemsArea
        category={{ selectedcategory, showcategories }}
        changecategrory={setselectedcategory}
        setiteminfo={setiteminfo}
      />
    </>
  );
};

export default SideBar;
