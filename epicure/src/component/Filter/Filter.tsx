import React from "react";
import FilterButtons, { PriceButton } from "../Buttons/Buttons";
import "./Filter.css";
import { useState } from "react";
import RenderRest from "../Restaurant/RenderRest/RenderRest";
import ChefCard from "../Chefs/ChefCard/ChefCard";

interface IRender {
  toRender: string;
}
const Filter: React.FC<any> = (props: any) => {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <div id="main-filter">
        <div id="filter-div">
          {props.toRender ? (
            <>
              <FilterButtons name="All" filter={filter} setFilter={setFilter} />
              <FilterButtons name="New" filter={filter} setFilter={setFilter} />
              <FilterButtons
                name="Most Popular"
                filter={filter}
                setFilter={setFilter}
              />
              <FilterButtons
                name="Open Now"
                filter={filter}
                setFilter={setFilter}
              />
              <FilterButtons
                name="Map View"
                filter={filter}
                setFilter={setFilter}
              />
            </>
          ) : (
            <>
              <FilterButtons name="All" filter={filter} setFilter={setFilter} />
              <FilterButtons name="New" filter={filter} setFilter={setFilter} />
              <FilterButtons
                name="Most Viewed"
                filter={filter}
                setFilter={setFilter}
              />
            </>
          )}
        </div>
        {props.toRender ? (
          <div id="range-div">
            <PriceButton name="Price Range" min={12} max={357} />

          </div>
        ) : null}
        {props.toRender ? <RenderRest sortFilter={filter} /> : <ChefCard />}
      </div>
    </>
  );
};

export default Filter;
