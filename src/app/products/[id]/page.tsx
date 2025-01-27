import React from "react";

const Product = async  ({ params }: { params: { id: string } }) => {
  const {id} = await params
  return <div>Product {id}</div>;
};

export default Product;
