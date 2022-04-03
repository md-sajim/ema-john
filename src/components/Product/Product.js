import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, ratings, seller, price } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: $ {price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rattings: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.addToCarthandal(props.product)}
        className="but-cart"
      >
        <p> Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
