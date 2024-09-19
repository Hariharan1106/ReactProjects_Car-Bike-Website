import React, { Component } from "react";
//Step 1
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
//step 2
import CarPage from "./components/CarPage";
import BikePage from "./components/BikePage";
import { CarDetail } from "./components/CarDetailPage";
import { BikeDetail } from "./components/BikeDetailPage";
import DataCar from "./DataCar";
import DataBike from "./DataBike";


class App extends Component {
  render() {
    return (
       <Router>
         <div class="header">   
           <nav>
            <h1>Car and Bike Website</h1>
             <ul>
                <li><a className="link" href="/">Home</a></li>
                <li><a  className="link" href="/bike">bike</a></li>
                <li><a  className="link" href="/car">car</a></li>
             </ul>
           </nav>
           </div> 
        <Routes>
        <Route
            path='/vehicle/:id'
            element={<CarDetail />}> 
            </Route>
            <Route
            path='/bike/:id'
            element={<BikeDetail />}> 
            </Route>
        <Route
            path="/"
            element={<DataCar />}></Route>
        <Route
            path="/car"
            element={<DataCar />}></Route>

          <Route
            path="/bike"
            element={<DataBike />}
          ></Route>
        </Routes>
        </Router>
    );
  }
}

export default App;