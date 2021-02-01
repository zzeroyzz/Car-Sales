import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addNewFeat} from "../actions/actions";
import {connect} from "react-redux"

const AdditionalFeatures = (props) => {

  const featurePurchase = item =>{
    props.addNewFeat(item)
  }
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature addNewFeat={featurePurchase} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {//selecting additionalFeatures from store 
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps,{addNewFeat})(AdditionalFeatures);
