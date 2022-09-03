/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchProducts } from "../redux/products/productsAction";

//Components
import Product from "./shared/Product";
import Loader from "./shared/Loader";

// Styles
import styles from "./Store.module.css";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);

    useEffect(() => {
        if (!productsState.products.length) {
            dispatch(fetchProducts());
        }
    }, []);

    return (
        <div className={styles.container}>
            {productsState.loading ? (
                <Loader />
            ) : productsState.error ? (
                <p>Something went wrong</p>
            ) : (
                productsState.products.map((product) => (
                    <Product key={product.id} productData={product} />
                ))
            )}
        </div>
    );
};

export default Store;
