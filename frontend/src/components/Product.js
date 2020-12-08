import React from "react";
import Rating from "./Rating";

export default function Product(props) {
  
  const { product } = props;

  return (
    <div key={product.id} className="card">
      <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product.id}`}>
          <h1>{product.name} </h1>
        </a>
        <Rating rating={product.rating} numReview={product.numReview} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
