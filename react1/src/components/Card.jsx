import React from "react";

const Card = ({product}) => {
  return (
    <div
      className=" card px-2 py-4"
     
      style={{ width: "18rem" }}
    >
      <div className=" card-body">
        <img src={product.image} className="mb-3" height="100px" alt="" />
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className=" text-muted text-truncate">{product.description}</p>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
