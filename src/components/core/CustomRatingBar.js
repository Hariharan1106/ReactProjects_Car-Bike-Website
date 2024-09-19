import React from "react";
import {Rating} from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'
    
export class CustomRatingBar extends React.Component
{
  rating=0;
  render()
  {
    return (
    <div>
        <Rating  readOnly="True" style={{ maxWidth: 100 }} value={this.props.rating} />Rating : {this.props.rating}
    </div>
    )
  }
}