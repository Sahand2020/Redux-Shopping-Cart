import React from "react";
import { useDispatch } from "react-redux";

// Functions
import { shorten } from "../../helper/functions";

// Style
import styles from "./Cart.module.css";

// icons
import trashIcon from "../../assets/icons/trash.svg";

// Actions
import { increase, decrease, removeItem } from "../../redux/cart/cartAction";

const Cart = (props) => {
    const { image, title, price, quantity } = props.data;
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity > 1 ? (
                    <button onClick={() => dispatch(decrease(props.data))}>
                        -
                    </button>
                ) : (
                    <button onClick={() => dispatch(removeItem(props.data))}>
                        <img src={trashIcon} alt="trash" />
                    </button>
                )}
                <button onClick={() => dispatch(increase(props.data))}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Cart;
