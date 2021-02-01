export const ADD_FEATURE= "ADD_FEATURE";
export const REMOVE_FEATURE="REMOVE_FEATURE";

//adding feature
export const addNewFeat = (carData) =>{
    console.log("adding feature", carData)
    return{
        type:ADD_FEATURE,
        payload:carData
    }
}

//removing feature
export const removingAddedFeat = (feature) => {
    console.log("removing feature", feature)
    return{
        type:REMOVE_FEATURE,
        payload:feature
    }
}