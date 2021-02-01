import React from 'react';
import {addNewFeat} from "../actions/actions";
import {connect} from "react-redux"

const AdditionalFeature = (props) => {

 
  return (
    <li>
      
      <button className="button" onClick ={() =>{
        props.addNewFeat(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
    
  );
  
};
export default connect(null, {addNewFeat}) (AdditionalFeature);//null no longer want to subscribe