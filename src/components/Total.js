import React from 'react';
import {connect}from "react-redux"

const Total = (props) => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {//selecting additionalPrice/car from store 
  return {
    additionalPrice: state.additionalPrice,
    car:state.car
  }
}

export default connect(mapStateToProps,{}) (Total);
