import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/Axios";

// This Code is Responsible for displaying Product Details on a Separate Page.
function ProductDetails({ match }) {
  const [item, setItem] = useState({}); // item is a object that stores the data of the item

  // Whenever the Product will be change it'll fetch the latest data and stores into state
  useEffect(() => {
    const fetchData = async () => {
      const requestItemData = await axios.get(`/products/${match.params.id}`);
      setItem(requestItemData.data);
      return requestItemData;
    };

    fetchData();
  }, [match.params.id]);

  const loading = "Loading...";

  return (
    <div className="p-3">
      <h1 className="ml-1"> Product Details</h1>

      <hr />

      {/* Back Button */}
      <Link to="/products" className="backNavigation">
        <button className="btn btn-primary mb-3">{`<`}</button>
      </Link>

      {/* Main Container */}
      <div className="container">
        <div className="d-inline-block pull-left ml-2 imageContainer">
          {item.categoryId ? (
            <img
              alt=""
              className="imageArea"
              src="https://img.icons8.com/emoji/96/000000/mobile-phone.png"
            />
          ) : (
            <img
              alt=""
              className="imageArea"
              src="https://img.icons8.com/fluent/96/000000/laptop.png"
            />
          )}
        </div>
        <div className="d-inline-block descPanel pull-left ml-5">
          <b>
            <h2> {item.name ? item.name : loading} </h2>{" "}
          </b>
          <br />
          <h5>Model : {item.model ? item.model : loading} </h5> <br />
          <h5>
            {" "}
            Price :{" "}
            {`₹ ${
              item.price ? parseFloat(item?.price).toFixed(2) : loading
            }`}{" "}
          </h5>
          <br />
          <h5> Description : </h5>
          <p>{item.description ? item.description : loading}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
