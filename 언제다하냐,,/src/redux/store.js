
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import rootReducer from "./reducer";
import cartSlice from "./slice/cartSlice";

const middlewares = [thunk];

const store = configureStore({
    reducer:{
        cart: cartSlice,
    },

}

)

export default store