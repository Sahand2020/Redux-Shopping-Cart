import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Style
import styles from "./Navbar.module.css";

// icons
import cartIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart">
                        <img
                            src={cartIcon}
                            alt="cart"
                        />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
