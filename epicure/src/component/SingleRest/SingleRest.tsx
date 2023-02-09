import React, { ReactNode } from "react";
import { ICard, ICardProps } from "../../interFaces/interFaces";
import "./SingleRest.css";

const SingleRest = (props: ICardProps | undefined) => {
  const restProps: ICard | undefined = props?.rest;
  return (
    <>
      <div className="rest">
        <img className="food" src={restProps?.img} alt="" />
        <div className=" icons">
          <h1>{restProps?.name} </h1>
          <p>{restProps?.chef}</p>
          <img className="rating" src={restProps?.rating} alt="" />
        </div>
      </div>
    </>
  );
};

export default SingleRest;
