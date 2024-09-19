import { useState, useEffect } from "react";
import React from "react";
import car from "../Data/car_db.json";
// import '../components/cars.css';
import { CustomRatingBar } from "./core/CustomRatingBar";
import { Link } from "react-router-dom";

    
  function CarPage() {
  const [vehicles, setVehicles] = useState([]);

    console.log(vehicles);

    useEffect(() => {
        setVehicles(car);
    }, []);

    return (
      
        <div className="row row-cols-1 row-cols-md-4">
        {
        vehicles.map(vehicle => (
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={vehicle.poster} width="300px" height="275px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{vehicle.vehiclename}</h5>
                  {< CustomRatingBar rating={vehicle.Rating} />}
                  <Link to={"/vehicle/"+vehicle.id} className="btn-success btn">show</Link>
                </div>
              </div>
            </div> 
            ))
        }
        <br/>
        </div>
    )
}

export default CarPage;