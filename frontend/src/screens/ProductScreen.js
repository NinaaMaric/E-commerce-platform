import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export const ProductScreen = (props) => {
  const product = data.products.find((x) => x.id === props.match.params.id);

  if (!product) {
    return <div> Product no found! </div>;
  }

  return (
    <div>
      <Link to="/">
        <div className="backTo">
          <i className="fas fa-arrow-left"></i> Back to home page
        </div>
      </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1> {product.name} </h1>
            </li>
            <li>
              <Rating rating={product.rating} numReview={product.numReview} />
            </li>
            <li>
              <p className="product-info">Price: <span> ${product.price} </span> </p>
            </li>
            <li>
              <p className="product-info">Description: <span>{product.description}</span></p> 
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-price card-body">
            <ul>
              <li>
                <div className="row">
                  <p className="product-info">Price: </p>
                  <div className="price"> ${product.price} </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <p className="product-info">Status: </p>
                  <div className="price">
                    {product.countInStock > 0 ? (
                       <span className="success"> In stock</span>
                    ) : (
                       <span className="danger"> Unavaible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
