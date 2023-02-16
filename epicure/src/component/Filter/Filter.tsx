import React from "react";
import FilterButtons from "../Buttons/FilterButtons/Buttons";
import "./Filter.css";
import { useState } from "react";
import RenderRest from "../Restaurant/RenderRest/RenderRest";
import ChefCard from "../Chefs/ChefCard/ChefCard";
import FilterContainer from "../Buttons/FilterContainer/FilterContainer";

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
        {props.toRender && (
          <div id="range-div">
            <FilterContainer name={""} />
          </div>
        )}
        {props.toRender ? <RenderRest sortFilter={filter} /> : <ChefCard />}
      </div>
    </>
  );
};

export default Filter;
