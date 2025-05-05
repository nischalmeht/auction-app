import React from 'react';
import { connect } from 'react-redux';
import orderBurger from './redux/Burger/BurgerActions'; // Ensure this is correctly imported

const BurgerBox = (props) => {
    return (
        <div className="container">
            <h2 className="text">Number of Burgers available - {props.burger}</h2>
            <button className="btn" onClick={props.orderBurger}>Order Burger</button>
        </div>
    );
};

// Fix `mapStateToProps` to match how the reducer is structured
const mapStateToProps = (state) => {
    return {
        burger: state.burger?.burgerBuns || 0 // Ensure correct state reference
    };
};

const mapDispatchToProps = (dispatch) => {   
    return {
        orderBurger: () => dispatch(orderBurger())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
