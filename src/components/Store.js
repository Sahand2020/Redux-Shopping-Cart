/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchProducts } from "../redux/products/ProductsAction";

//Components
import Product from "./shared/Product";

// Styles
import styles from "./Store.module.css";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className={styles.container}>
            {productsState.loading ? (
                <h2>Loading ...</h2>
            ) : productsState.error ? (
                <p>productsState.error</p>
            ) : (
                productsState.products.map((product) => (
                    <Product key={product.id} productData={product} />
                ))
            )}
        </div>
    );
};

export default Store;
