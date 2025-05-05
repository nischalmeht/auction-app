import { ORDER_BURGER } from "./BurgerType";

 function orderBurger(number=1){
    return{
        type:ORDER_BURGER,
        payload:number
    }
}
export default orderBurger