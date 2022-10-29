import "./ProductDetails.css"
import StarIcon from "../StarIcon/StarIcon"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../App";

let ProductDetails = function () {
    let [cart, setCart] = useContext(ShoppingCartContext);
    let { id } = useParams();
    let [product, setProduct] = useState({});
    console.log(cart)
    
    let eventCart = function () {
        setCart([...cart, product]);
    }

    useEffect(function () {
        fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
    }, [id]);

    return (
        <product-details class="details" key={product.id} id={product.id}>
            <product-image><img src={product.image}></img></product-image>
            <product-title>{product.title}</product-title>
            <product-description>{product.description}</product-description>
            <product-price>{new Intl.NumberFormat('en-In', { style: 'currency', currency: 'USD' }).format(product.price)}</product-price>    
            <product-rating>
                {Object.keys(product).length !== 0 && <StarIcon product={product}></StarIcon>} 
            </product-rating>
        
            <button onClick={eventCart}>Add to Cart</button>
        
        </product-details>
    )
}

export default ProductDetails;