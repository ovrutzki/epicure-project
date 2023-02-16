import React, { useEffect } from "react";
import FilterButtons from "../Buttons/FilterButtons/Buttons";
import "./Filter.css";
import { useState } from "react";
import RenderRest from "../Restaurant/RenderRest/RenderRest";
import ChefCard from "../Chefs/ChefCard/ChefCard";
import FilterContainer from "../Buttons/FilterContainer/FilterContainer";
import { useDispatch } from "react-redux";
import { mainFilter } from "../../store/slicer/restaurantSlicer";

interface IRender {
  toRender: string;
}
const Filter: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  dispatch(mainFilter(filter));

  useEffect(() => {
    dispatch(mainFilter(filter));
    console.log(filter);

  }, [filter]);

  return (
    <>
      <div id="main-filter">
        <div id="filter-div">
          {props.toRender ? (
            <>
              <FilterButtons
                name="All"
                onClick={() => {
                  setFilter("All");
                }}
              />
              <FilterButtons
                name="New"
                onClick={() => {
                  setFilter("New");
                }}
              />
              <FilterButtons
                name="Most Popular"
                filter={filter}
                onClick={() => {
                  setFilter("Most Popular");
                }}
              />
              <FilterButtons
                name="Open Now"
                filter={filter}
                onClick={() => {
                  setFilter("Open Now");
                }}
              />
              <FilterButtons
                name="Map View"
                filter={filter}
                onClick={() => {
                  setFilter("Map View");
                }}
              />
            </>
          ) : (
            <>
              <FilterButtons name="All" setFilter={setFilter} />
              <FilterButtons name="New" setFilter={setFilter} />
              <FilterButtons name="Most Viewed" setFilter={setFilter} />
            </>
          )}
        </div>
        {props.toRender && (
          <div id="range-div">
            <FilterContainer name={""} />
          </div>
        )}
        {/* {props.toRender ? <RenderRest sortFilter={filter} /> : <ChefCard />} */}
      </div>
    </>
  );
};

export default Filter;
