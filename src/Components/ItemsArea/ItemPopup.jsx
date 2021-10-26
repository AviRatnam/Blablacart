const CartPopup = (props) => {
  const imagestyle = `col-span-1 h-32 w-40 sm:h-48 object-cover`;

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
      <div class="rounded-lg shadow-lg border-gray-100 bg-white p-5 ">
        <div class="p-5 grid grid-cols-3">
          <img class={imagestyle} src={props.item_img} alt="img" />
          <div class="my-5 mx-3 col-span-2">
            <div class="font-bold text-left mx-2">
              {props.item_name}
              <div class="my-2">
                Quantity:
                <input
                  class="text-center"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  defaultValue={props.quantity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
