import Cart from "./Components/Cart/Cart";
import Username from "./Components/Username/Username";
import HeaderStyles from "./HeaderStyles";
import SideBar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

// import SidebarandItems from "./Components/SidebarandItems";

function App() {
  const [cartdata, setcartdata] = useState(null);
  const [showcartdata, setshowcartdata] = useState(false);
  const [showcartitems, setshowcartitems] = useState(false);
  const [isupdates, setisupdates] = useState(false);

  const API = "http://localhost:8000/cart";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setcartdata(data);
        setshowcartdata(true);
      });
  }, [isupdates]);

  const setiteminfo = (title, price, img) => {
    const iteminfo = {
      item_name: title,
      price: price,
      quantity: 1,
      item_img: img,
    };

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(iteminfo),
    }).then((res) => setisupdates(!isupdates));
  };

  return (
    <div class="p-3">
      <div class={HeaderStyles}>
        <span class="text-2xl border-b-2 border-black">BlablaCart</span>
        <div class=" items-center space-x-10 ">
          <Cart
            cartdata={cartdata}
            showcartdata={showcartdata}
            showcartitems={showcartitems}
            setshowcartitems={setshowcartitems}
          />
          <Username />
        </div>
      </div>

      <div class="grid md:grid-cols-4 py-5 gap-5">
        <SideBar setiteminfo={setiteminfo} />
      </div>
    </div>
  );
}

export default App;
