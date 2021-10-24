import { useState } from "react";

const ItemCounter = (props) => {
  const timeclass = `bg-red-300
font-bold
text-md
uppercase
rounded-full
px-3
py-2
absolute
top-0
ml-14
mt-3`;

  return (
    <div class={timeclass}>
      <span>{props.amount}</span>
    </div>
  );
};

export default ItemCounter;
