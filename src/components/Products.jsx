import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "../api/Axios";
import "./Products.css";

function Products() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const requestCategories = await axios.get("/categories");
      setCategories(requestCategories.data);
      return requestCategories;
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchItemsData = async () => {
      const requestItems = await axios.get("/products");
      setItems(
        Object.values(requestItems.data).filter((dataItem) =>
          category === "All" ? 1 : dataItem.categoryId === +category
        )
      );
      return requestItems;
    };

    fetchItemsData();
  }, [category]);

  const categorySelection = () => {
    return categories.map((category) => (
      <option key={category?.id} value={category?.id}>
        {category?.name}
      </option>
    ));
  };

  return (
    <div className="p-3">
      <h1 className="ml-1">Products</h1>
      <hr />
      <div className="form-group centered">
        <label htmlFor="categoryDropdown">Select Category</label>
        <select
          name="categoryDropdown"
          className="custom-select ml-3 col-lg-2"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled>
            Please Select Category
          </option>
          <option value="All">All</option>
          {categorySelection()}
        </select>
      </div>

      <hr />

      <div className="row__products">
        {Object.values(items).map((item) => (
          <Product
            key={item.id}
            id={item.id}
            categoryId={item.categoryId}
            name={item?.name}
            model={item?.model}
            price={item?.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
