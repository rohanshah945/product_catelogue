import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// This code is responsible for displaying individal Product in the product List
function Product({ id, name, model, price, categoryId }) {
  return (
    <div className="row__product">
      <Link to={`/products/${id}`} className="row__product__link">
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block left__block pull-left ml-2">
              {/* If categoryId == 0 that means Category is Laptop. it will load image from thirdparty website */}
              {categoryId ? (
                <img
                  alt={name}
                  src="https://img.icons8.com/emoji/96/000000/mobile-phone.png"
                />
              ) : (
                <img
                  alt={name}
                  src="https://img.icons8.com/fluent/96/000000/laptop.png"
                />
              )}
            </div>

            {/* Details of the Product */}
            <div className="d-inline-block right__block pull-left ml-4">
              <b>
                <h5 className="card-title">{name}</h5>
              </b>
              <h6 className="card-text">Model : {model}</h6>
              <p className="card-text">
                {" "}
                Price : {`₹ ${parseFloat(price).toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
