import React from "react";
import "./Product.css";
import useFetchCustom from "../../customHook/useFetchCustom";

const url = "https://fakestoreapi.com/products";
export default function Products() {
  let { data, loading } = useFetchCustom(url);
  let result = data;
  let status = loading;
  // console.log(result, "what");
  if (status) return <div>Loading</div>;
  return (
    <div>
      <h1>Products</h1>
      {result.map((item) => {
        return (
          <div key={item.id}>
            <h3>Name:{item.title} </h3>
            <p> {item.price} sek</p>
            <img className="image" src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
