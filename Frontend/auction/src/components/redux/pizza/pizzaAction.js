// Action Types

import { ORDER_PIZZA } from "./pizzaType";

// Action Creator
export const orderPizza = () => {
    return {
        type: ORDER_PIZZA,
    };
};