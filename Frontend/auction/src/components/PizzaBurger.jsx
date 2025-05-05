import React, { useCallback } from 'react'
import { orderPizza } from './redux/pizza/pizzaAction'
import { connect } from 'react-redux'

const PizzaBurger = (props) => {
    const handleOrderPizza = useCallback(() => {
        props.orderPizza();
    }, [props]);

    return (
        <div className="container">
            <h2 className="text">Number of Pizza Base available- {props.pizzaBase}</h2>
            <button className="btn" onClick={handleOrderPizza}>Order Pizza</button>
        </div>
    );
}

const mapStateToProps=(state)=>{
   
    return{
        pizzaBase:state.pizza.pizzaBase
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        orderPizza: () => dispatch(orderPizza())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBurger)