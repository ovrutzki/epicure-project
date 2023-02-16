import { useState } from "react";
import { IButtons } from "../../../interFaces/interFaces";
import DistanceButton from "../DistanceButton/DistanceButtons";
import { PriceButton } from "../PriceButtons/PriceButtons";
import RatingButton from "../RatingButton/Ratingbutton";
import "./FilterContainer.css"
const FilterContainer: React.FC<IButtons> = (props):any =>{
 const [addPrice, setAddPrice]:any = useState(false)
 const [addDistance, setAddDistance]:any = useState(false)
 const [addRating, setAddRating]:any = useState(false)
    const openRang = (x:any,y:any,z:any):any=>{
      x(true)
      y(false)
      z(false)
    }
    return (
      <>
      <div className="after-open">
        <button id="price" className="open-sort" onClick={()=>openRang(setAddPrice,setAddDistance,setAddRating)}><h1>Price Range</h1><img src="/image/icons/down arrow.svg" alt="down arrow" /></button>
        {addPrice && <PriceButton name="Price Range"/>}
      </div>
      <div className="after-open">
        <button id="distance" className="open-sort" onClick={()=>openRang(setAddDistance,setAddRating,setAddPrice)}><h1>Distance</h1><img src="/image/icons/down arrow.svg" alt="down arrow" /></button>
        {addDistance && <DistanceButton name="Distance" />}
      </div>
      <div className="after-open">
        <button id="rating" className="open-sort" onClick={()=>openRang(setAddRating,setAddPrice,setAddDistance)}><h1>Rating</h1><img src="/image/icons/down arrow.svg" alt="down arrow" /></button>
        {addRating && <RatingButton name={"Rating"} />}
      </div>
      </>
    );

}
   

  export default FilterContainer;