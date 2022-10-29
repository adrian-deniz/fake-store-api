import "./ProductItem.css";
import StarIcon from "../StarIcon/StarIcon";
import { Link } from "react-router-dom";

let ProductItem = function ({product}) {
  return (
    <Link to={`/details/${product.id}`}>
      <product-item class="product_item" id={product.id}>
        <product-image>
          <img src={product.image}></img>
        </product-image>
        <product-title>{product.title}</product-title>
        <product-price>{new Intl.NumberFormat('en-In', { style: 'currency', currency: 'USD' }).format(product.price)}</product-price>    
        <product-rating>
          <StarIcon product={product}></StarIcon>
          <rating-count>({product.rating.count})</rating-count>
        </product-rating>
      </product-item>
    </Link>
  )
};

export default ProductItem;