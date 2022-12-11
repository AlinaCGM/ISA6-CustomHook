import React from "react";

import "./Product.css";
import useFetchCustom from "../../customHook/useFetchCustom";

const url = "https://fakestoreapi.com/products/1";
export default function Product() {
  const result = useFetchCustom(url).data;
  // console.log(result, "what");

  return (
    <div>
      <h1>Product</h1>
      <h3>Name:{result.title} </h3>
      <p> {result.price} sek</p>
      <img className="image" src={result.image} alt="" />
    </div>
  );
}
