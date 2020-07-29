import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-3">
      <h1 className="ml-1">Home</h1>
      <hr />

      <div>
        <h4>
          Github Repository :{" "}
          <a href="https://github.com/rohanshah945/product_catelogue.git/">
            https://github.com/rohanshah945/product_catelogue.git/
          </a>{" "}
        </h4>
        <hr />

        <div className="jumbotron">
          <h4>Steps to Install the Project</h4>
          <ul>
            <li>Clone the Repository.</li>
            <li>Navigate to the cloned folder.</li>
            <li>Run command : 'npm install'</li>
            <li>Run command : 'npm start'</li>
          </ul>
          Technical Dependencies used in this Project :
          <ul>
            <li>react-router-dom</li>
            <li>axios</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <Link to="/products">
          <button className="btn btn-primary btn-lg">
            SKIP TO THE PRODUCTS PAGE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
