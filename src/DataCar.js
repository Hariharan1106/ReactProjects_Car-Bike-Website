import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { CustomRatingBar } from "./components/core/CustomRatingBar";

const DataCar = ()=> {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:5000/car')
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);

        });
    },[]);
    if(loading) {
        return<div>Loading...</div>;
    }
    if(error){
        return <div>Error:{error.message}</div>;
    }


return (
    <div className="row row-cols-1 row-cols-md-4">
    {
    data.map(vehicle => (
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
        )
    )
    }
    <br/>
    </div>
)
}

export default DataCar;