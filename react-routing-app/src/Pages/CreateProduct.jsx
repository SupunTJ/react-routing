import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      CreateProduct
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default CreateProduct;