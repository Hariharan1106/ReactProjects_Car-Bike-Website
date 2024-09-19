import { useParams } from "react-router-dom";
import React from "react";
import Bike from '../Data/Bike_db.json';
import { CustomRatingBar } from "./core/CustomRatingBar";

export function BikeDetail() {
    const {id} = useParams();

     //filter based on id
     var filteredbikes = Bike.filter(item => item.id == id);
     console.log("bikes"+filteredbikes);
    
     return (
         <div class="card mb-3" style={{maxwidth: 540 }}>
             {
                 filteredbikes.map(bike => (
                      <div class="row ">
                       <div class="col-md-5">
                             <img src={bike.poster} width="500px" height="300px" class="img-fluid rounded-start" alt="..." />
                             </div>
                             <div className="col-md-4">
                             <div className="card-body">
                              <h5 className="card-title">Name : {bike.bikename}</h5>
                                  <p className="card-text">About : {bike.About} </p>
                                  <p className="card-text">Mileage : {bike.Mileage} </p>
                                  <p className="card-text">Gear : {bike.Gear} </p>
                                  {< CustomRatingBar  rating={bike.Rating} />}
                                  <a className="btn-success btn" href='#'>{bike.id}</a>
                             </div>
                         </div>
                     </div>
                 ))
             }
         </div>
     );
    } 
