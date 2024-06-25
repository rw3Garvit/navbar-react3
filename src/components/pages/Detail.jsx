import React from "react";
import { useParams } from "react-router-dom";
import { product } from "./product";

const Detail = () => {
  let { id } = useParams();

  let result = product.filter((val) => val.id == id);
  console.log(result);

  return (
    <div>
      <img src={`${result[0].img}`} alt="" />
      <h1>{result[0].productName}</h1>
      <h2>{result[0].price}</h2>
    </div>
  );
};

export default Detail;
