import { combineReducers } from "redux";
import productsReducer from "./products/ProductsReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
});

export default rootReducer;
