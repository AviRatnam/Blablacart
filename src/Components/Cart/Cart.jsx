import CartIcon from "./CartIcon";
import cartstyles from "./CartStyles";
import ItemCounter from "./ItemCounter";

const Cart = () => {
  return (
    <div class={cartstyles}>
      <ItemCounter amount="0" />
      <CartIcon />
      <span>Cart</span>
    </div>
  );
};

export default Cart;
