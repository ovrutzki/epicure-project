import React from "react";
import { IButtons } from "../../interFaces/interFaces";
import "./Buttons.css";
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
export const SortButtons = styled.input`
-webkit-appearance: none;
appearance: none;
height: 2px;
width: 17vw;
background-color: #c6c6c6;
pointer-events: none;
&::-webkit-slider-thumb{
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

export 

export const PriceButton: any = (props: IButtons) => {
  const [minValue, setMinValue] = useState(10);
  const onChangeMinValue = (e:any):void =>{
    setMinValue(e.target.value)
  }
  const [maxValue, setMaxValue] = useState(357);
  const onChangeMaxValue = (e:any):void =>{
    setMaxValue(e.target.value)
  }


  return (
    <>
    <div id="range-button">
      <button><h1>{props.name}</h1><img src="/image/icons/down arrow.svg" alt="down arrow" /></button>
      <div id="rang-popup">
        <h2>{props.name} selected</h2>
        { minValue < maxValue ? <p>₪{minValue} - ₪{maxValue}</p>  : <p>₪{maxValue}- ₪{minValue}</p>  }
        <div id={props.name} className="slider-div" >
          <SortButtons id="from-slider" value={minValue} min={props.min} max={props.max} type="range" onChange={onChangeMinValue} />
          <SortButtons id="to-slider" value={maxValue} min={props.min} max={props.max}  type="range" onChange={onChangeMaxValue} />
        </div>
      </div>
    </div>
    </>
  );
};



