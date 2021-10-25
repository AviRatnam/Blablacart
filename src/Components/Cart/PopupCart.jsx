import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../CartContext";

const PopupCart = () => {
  const [items, setitems] = useContext(CartContext);

  const [quantity, setquantity] = useState(1);

  const imagestyle = `col-span-1 h-32 w-40 sm:h-48 object-cover`;
  const deletebutton =
    "mx-2 my-1 bg-red-400 hover:bg-red-300 text-center text-white p-1 max-w-sm rounded-md cursor-pointer";

  const deleteitem = (remove_id) => {
    const result = items.filter((item) => item.id !== remove_id);
    setitems(result);
  };

  const setnewquantity = (newquantity, id) => {
    try {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          items[i].quantity = newquantity;
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  console.log(items);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: 400,
          width: 325,
          overflow: "auto",
          position: "absolute",
          zIndex: 10,
          top: 50,
          left: "-300",
          background: "white",
          borderRadius: 25,
          borderColor: "black",
        }}
      >
        {items.map((info, i) => (
          <div key={i} class="rounded-lg shadow-sm">
            <div class="p-5 grid grid-cols-3">
              <img class={imagestyle} src={info.item_img} alt="img" />
              <div class="my-5 mx-3 col-span-2">
                <div class="font-bold text-left mx-2">
                  {info.item_name}
                  <div class="my-2">
                    Quantity:
                    <input
                      class="text-center"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="10"
                      defaultValue={quantity}
                      onChange={(e) => setnewquantity(e.target.value, info.id)}
                    />
                  </div>
                </div>
                <div class={deletebutton} onClick={() => deleteitem(info.id)}>
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupCart;
