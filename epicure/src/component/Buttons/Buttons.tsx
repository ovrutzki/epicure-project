import React from "react";
import { IButtons } from "../../interFaces/interFaces";
// import "./Buttons.css";
import styled from "styled-components";
import {useState} from 'react'

export const SimpleButtons = styled.button`
  font-family: "Helvetica light";
  font-size: 1.2vw;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  font-weight: 300;
  &:hover {
    font-weight: bolder;
  }
  &:focus {
    font-family: "Helvetica medium";
    font-weight: bolder;
  }
`;
export const SortButtons = styled.select`
  font-family: "Helvetica light";
  font-size: 1.2vw;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  height: 4vw;
  width: 9vw;
  text-align: center;
  &:hover {
    font-weight: bolder;
  }
  &:hover {
    background-color: rgba(208, 207, 207, 1);
  }
  &:focus {
    font-weight: bolder;
    background-color: rgba(208, 207, 207, 1);
  }
`;

const FilterButtons: React.FC<IButtons> = (props: IButtons) => {

    return (
      <>
        <SimpleButtons
          id={props.name}
          value={props.name}
          onClick={() => props.setFilter(props.name)}
        >
          {props.name}
        </SimpleButtons>
      </>
    );
  };
  
  export default FilterButtons;

export const RangeButtons: any = (props: IButtons) => {
  const filter = (e: any | null) => {
    const btnName = e.target.id;
    console.log(btnName);
    return btnName;
  };
  return (
    <>
      <SortButtons id={props.name} onClick={filter}>
        {props.name}
        <option value="">{props.name}</option>
      </SortButtons>
    </>
  );
};



