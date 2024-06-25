import React from "react";
import { product } from "./product";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      {product.map((val, index) => (
        <Link to={`/${val.id}`}>
          <h1>{val.id}</h1>
          <img src={val.img} alt="" height={250} width={250} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
