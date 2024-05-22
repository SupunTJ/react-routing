import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      ProductList
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
