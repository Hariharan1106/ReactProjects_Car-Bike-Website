import { useParams } from "react-router-dom";
import React from "react";
import car from "../Data/car_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";

export function CarDetail() {
    const {id} = useParams();

     //filter based on id
     var filteredCar = car.filter(item => item.id == id);
     console.log("Car"+filteredCar);
    
     return (
         <div class="card mb-3" style={{maxwidth: 540 }}>
             {
                 filteredCar.map(vehicle => (
                      <div class="row ">
                       <div class="col-md-5">
                             <img src={vehicle.poster} width="500px" height="300px" class="img-fluid rounded-start" alt="..." />
                             </div>
                             <div className="col-md-4">
                             <div className="card-body">
                              <h5 className="card-title">Name : {vehicle.vehiclename}</h5>
                                  <p className="card-text">About : {vehicle.Story} </p>
                                  <p className="card-text">Style : {vehicle.Bodystyle} </p>
                                  {< CustomRatingBar  rating={vehicle.Rating} />}
                                  <a className="btn" href='#'>{vehicle.id}</a>
                             </div>
                         </div>
                     </div>
                 ))
             }
         </div>
     );
    } 
