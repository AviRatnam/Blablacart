import CartIcon from "./CartIcon";
import cartstyles from "./CartStyles";
import ItemCounter from "./ItemCounter";
import PopupCart from "./PopupCart";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";

const Cart = () => {
  const {cartdata, setcartdata} = useContext(CartContext);
  const [showcartitems, setshowcartitems] = useState(false);

  return (
    <>
      <div>
        {showcartitems && <PopupCart />}
      </div>
      <div class={cartstyles} onClick={() => setshowcartitems(!showcartitems)}>
        <ItemCounter amount={cartdata?.length} />
        <CartIcon />
        <span>Cart</span>
      </div>
    </>
  );
};

export default Cart;
