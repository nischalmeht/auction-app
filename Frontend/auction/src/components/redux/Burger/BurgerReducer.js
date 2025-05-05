import { ORDER_BURGER } from "./BurgerType";

const initialState = {
   burgerBuns:200
};

const BurgerReducer = (state = initialState, action) => { 
    console.log(action,'state')   
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns:state.burgerBuns- Number(action.payload)
            };
        default:
            return state;
    }
};

export default BurgerReducer;