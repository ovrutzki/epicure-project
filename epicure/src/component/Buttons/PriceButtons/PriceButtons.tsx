import { useState } from "react";
import { IButtons } from "../../../interFaces/interFaces";
import { SortButtons } from "../FilterButtons/Buttons";
import "./PriceButton.css"

export const PriceButton:React.FC<IButtons> = (props: IButtons) => {
    const [minValue, setMinValue] = useState(10);
    const onChangeMinValue = (e:any):void =>{
      setMinValue(e.target.value)
    }
    const [maxValue, setMaxValue] = useState(357);
    const onChangeMaxValue = (e:any):void =>{
      setMaxValue(e.target.value)
    }
  
  
    return (
        <div className="price-popup">
          <h2>{props.name} selected</h2>
          { minValue < maxValue ? <p>₪{minValue} - ₪{maxValue}</p>  : <p>₪{maxValue}- ₪{minValue}</p>  }
          <div id={props.name} className="slider-div" >
            <section><p>₪{minValue}</p><p>₪{maxValue}</p></section>
            <SortButtons className="price-input" id="from-slider" value={minValue} min={12} max={357} type="range" onChange={onChangeMinValue} />
            <SortButtons className="price-input" id="to-slider" value={maxValue} min={12} max={357}  type="range" onChange={onChangeMaxValue} />
          </div>
        </div>
    );
  };