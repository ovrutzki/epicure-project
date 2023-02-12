import React from "react";
import "./WeekChef.css";
import data from "../../../epicure.json"


const WeekChef: React.FC = () => {
    const popularChef = data.chefs.find((best)=>best.name.includes("Yosi Shitrit"))
    console.log(popularChef)
    const firstName:any = popularChef?.name.split(" ")
    const chefRest = data.restaurant;
    chefRest.find(x => x.chefId === 1);
    console.log(chefRest)
      return (<>
      <div id="chef-of-the-week">
        <h1>Chef of the week:</h1>
        <div id="chef-info">
            <section id="chef-img">
            <img src={popularChef?.img} key={popularChef?.img} alt=""  />
            <h1>{popularChef?.name}</h1>
            </section>
            <p id="chef-about">{popularChef?.about}</p>
        </div>
        <div id="rest-div">
            <h1>{firstName[0]}’s Restaurants</h1>
            <section>
                {chefRest.map((rest, index)=>(
                    (index<3) && (
                        <div id="single-div">
                            <img src={rest.img} key={index} alt={rest.img} />
                            <div id="single-div-name"><h1>{rest.name}</h1></div>
                        </div>
                    )
                )
                )}
            </section>
        </div>
      </div>

        </>
      )
    }

export default WeekChef;