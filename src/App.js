import Cart from "./Components/Cart/Cart";
import Username from "./Components/Username/Username";
import HeaderStyles from "./HeaderStyles";
import SideBar from "./Components/Sidebar/Sidebar";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <div class="p-3">
        <div class={HeaderStyles}>
          <span class="text-2xl border-b-2 border-black">BlablaCart</span>
          <div class=" items-center space-x-10 ">
            <Cart />
            <Username />
          </div>
        </div>

        <div class="grid md:grid-cols-4 py-5 gap-5">
          <SideBar />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
