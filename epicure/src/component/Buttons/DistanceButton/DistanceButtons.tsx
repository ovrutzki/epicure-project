import React from "react";
import "./DistanceButton.css";
import { useState } from "react";
import { IButtons } from "../../../interFaces/interFaces";
import { SortButtons } from "../FilterButtons/Buttons";

const DistanceButton: React.FC<IButtons> = (props:IButtons) => {
  const [distance, setDistance] = useState(2);
  const onChangeDisValue = (e: any): void => {
    setDistance(e.target.value);
  };

  return (
    <div className="distance-popup">
          <h2>{props.name}</h2>
          <div id={props.name} className="slider-div" >
          <section><p>My Location</p><p>{distance}km</p></section>
            <SortButtons className="distance-input" id="from-dis-slider" value={0} min={0} max={4} type="range" onChange={onChangeDisValue} />
            <SortButtons className="distance-input" id="to-dis-slider" value={distance} min={0} max={4}  type="range" onChange={onChangeDisValue} />
          </div>
        </div>
  );
};

export default DistanceButton;
