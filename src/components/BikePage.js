import { useState, useEffect } from "react";
import React from "react";
import Bike from "../Data/Bike_db.json";
// import '../components/cars.css';
import { CustomRatingBar } from "../components/core/CustomRatingBar";
import { Link } from "react-router-dom";

 function BikePage() {
    const [bikes, setBikes] = useState([]);

    console.log(bikes);

    useEffect(() => {
        setBikes(Bike);
    }, []);

    return (
      
        <div className="row row-cols-1 row-cols-md-4">
        {
        bikes.map(bike => (
            <div className="col">
              <div className="card h-100 hover-card">
                <img src={bike.poster} width="300px" height="275px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{bike.bikename}</h5>
                  < CustomRatingBar rating={bike.Rating} />
                  <Link to={"/bike/"+bike.id}className="btn-warning btn">show</Link>
                </div>
              </div>
            </div>
            ))
        }
        <br/>
        </div>
    )
}

export default BikePage;