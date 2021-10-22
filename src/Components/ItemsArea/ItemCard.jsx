import cardclass from "./CardStyles";

const ItemCard = (props) => {
  const imagestyle = `w-full h-32 sm:h-48 object-cover`;
  return (
    <div class={cardclass}>
      <img class={imagestyle} src={props.img} alt="" />
      <div class="m-4">
        <span class="font-bold">{props.title}</span>
        <span class="block text=gray-500 text-sm">{props.price}</span>
      </div>
      <span>{props.children}</span>
    </div>
  );
};

export default ItemCard;
