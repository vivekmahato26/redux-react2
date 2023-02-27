import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";
// import cartSlice from "./slice/cartSlice";
import productsSlice from "./slice/productsSlice";

const store = configureStore({
    reducer: {
        Counter: counterSlice.reducer,
        // Cart: cartSlice.reducer,
        Products: productsSlice.reducer
    }
})

export default store;