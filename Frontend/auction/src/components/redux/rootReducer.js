import { combineReducers } from "redux";
import BurgerReducer from "./Burger/BurgerReducer";
import pizzaReducer from "./pizza/pizzaReducer";
import productReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: BurgerReducer, // Ensure this matches mapStateToProps
    product:productReducer
});

export default rootReducer;
