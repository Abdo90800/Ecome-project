import cartReducer from "./cartslice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CartSliceApi } from "./rtkQuiry/CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [CartSliceApi.reducerPath]: CartSliceApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(CartSliceApi.middleware),
});

setupListeners(store.dispatch);