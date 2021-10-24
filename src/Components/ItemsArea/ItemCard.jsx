import cardclass from "./CardStyles";

const ItemCard = (props) => {
  const imagestyle = `w-full h-32 w-40 sm:h-48 object-cover`;

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
          onClick={() => props.setiteminfo(props.title, props.price, props.img)}
        >
          Add to Cart
        </div>
      </div>
    </>
  );
};

export default ItemCard;
