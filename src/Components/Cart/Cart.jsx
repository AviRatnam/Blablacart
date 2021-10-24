import CartIcon from "./CartIcon";
import cartstyles from "./CartStyles";
import ItemCounter from "./ItemCounter";
import PopupCart from "./PopupCart";

const Cart = ({ setshowcartitems, showcartitems, showcartdata, cartdata }) => {
  return (
    <>
      <div>{showcartitems && <PopupCart />}</div>
      <div class={cartstyles} onClick={() => setshowcartitems(!showcartitems)}>
        {showcartdata && <ItemCounter amount={cartdata.length} />}

        <CartIcon />
        <span>Cart</span>
      </div>
    </>
  );
};

export default Cart;
