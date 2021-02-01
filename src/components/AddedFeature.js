import React from 'react';
import { connect } from "react-redux"
import {removingAddedFeat} from "../actions/actions"
const AddedFeature = props => {
  return (
    <li>
      
      <button className="button" onClick={() =>
        {props.removingAddedFeat(props.feature)}} >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {//selecting car from store 
  return {
    car: state.car
  }
}

export default connect(mapStateToProps,{removingAddedFeat}) (AddedFeature);
