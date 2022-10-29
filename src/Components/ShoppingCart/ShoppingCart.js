import {useContext, useEffect} from "react";
import { ShoppingCartContext } from "../../App";
import "./ShoppingCart.css";

let ShoppingCart = function () {
    let [cart, setCart] = useContext(ShoppingCartContext);
   
    return (
        <shoppingCart-container>
            <shopping-cart>
                <cart-header><h2>Shopping Cart</h2></cart-header>
                {cart.map(function (product) {
                    return (
                <>
                <cart-item class="details" key={product.id} id={product.id}>
                    <product-image><img src={product.image}></img></product-image>
                    <div>
                        <product-title>{product.title}</product-title>
                        <product-description>{product.description}</product-description>
                    </div>
                    <product-price>{new Intl.NumberFormat('en-In', { style: 'currency', currency: 'USD' }).format(product.price)}</product-price>   
                </cart-item>
                </>
                    )
                })}
                <cart-total-container>
                    <cart-total><cart-subtotal>SUBTOTAL</cart-subtotal>{new Intl.NumberFormat('en-In', { style: 'currency', currency: 'USD' }).format(cart.reduce(function (previousValue, currentValue) {return previousValue + currentValue.price;}, 0))}</cart-total>
                    <button>CHECKOUT</button>
                </cart-total-container>
            </shopping-cart>
        </shoppingCart-container>
    )
};

export default ShoppingCart;

