import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Style
import styles from "./Navbar.module.css";

// icons
import cartIcon from "../../assets/icons/shop.svg";

const Navbar = () => {
    const state = useSelector((state) => state.cartState);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to="/products" className={styles.productLink}>
                    Products
                </Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart">
                        <img src={cartIcon} alt="cart" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
