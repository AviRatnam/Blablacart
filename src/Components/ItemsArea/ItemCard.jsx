import cardclass from "./CardStyles";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

const ItemCard = (props) => {
  const imagestyle = `w-full h-32 w-40 sm:h-48 object-cover`;

  const [cart, setcart] = useContext(CartContext);

  const setiteminfo = (...data) => {
    const temp = 
      {
        "item_name":data[0],
        "price":data[1],
        "item_img":data[2],
        "quantity":data[3],
        "id":data[4]
      }
    cart.map(ele => {
      if(ele.id === data[4]){
        console.log("Duplicate");
        return{
          // ...temp,quantity:ele.quantity+1
          ...temp,quantity:ele.quantity+1
        }
      }
      else{
        return temp;
      }
    })
    console.log(temp, cart);
    setcart([...cart,temp]);
  }
  
  return (
    <>
      <div class={cardclass}>
        <img class={imagestyle} src={props.img} alt="" />
        <div class="m-4">
          <span class="font-bold text-lg">{props.title}</span>
          <span class="block text=gray-500 text-md font-bold pt-2">
            Price: ${props.price}
          </span>
        </div>
        <div
          class="p-4 font-bold bg-yellow-100 hover:bg-yellow-200"
          onClick={() => setiteminfo(props.title, props.price, props.img, props.quantity, props.id)}
        >
          Add to Cart
        </div>
      </div>
    </>
  );
};

export default ItemCard;
