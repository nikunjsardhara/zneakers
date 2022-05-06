import React from "react";
import ProductListItem from "./ProductListItem";
import products from "./../products";

const ProductList = () => {
  return (
    <>
      {products.map((product) => {
        return <ProductListItem product={product} />;
      })}
    </>
  );
};

export default ProductList;
