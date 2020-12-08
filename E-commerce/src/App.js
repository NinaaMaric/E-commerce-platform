import React from 'react';
import Product from './img/product-1.png'
import {data} from './data'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="logo" href="/">E-commerce platform</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
        </div>
    </header>
    <main>
      <div>
    <div className="row center">
      {
        data.products.map((product)=>(
          <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
              <img className="medium" src={Product} alt="products" />
          </a>
          <div className="card-body">
               <a href={`/product/${product._id}`}>
                 <h1>{product.name} </h1>
              </a>
              <div className="rating">
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
                  <span>
                      <i className="fa fa-star"></i>
                  </span>
              </div>
              <div className="price">
                  ${product.price}
              </div>
          </div>
      </div>
        ))
      }
   </div>
    </div>
    </main>
        <footer className="row center">
            2020 &copy; All rights reserved
        </footer>
    </div>
  );
}

export default App;
