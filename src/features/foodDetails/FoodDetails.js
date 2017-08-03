import React from 'react';
import PropTypes from 'prop-types';

const FoodDetails = (props) => (
        <div>{props.food}</div>
)

FoodDetails.propTypes = {
    food: PropTypes.string // It was not complaining if I changed it on array
};

export default FoodDetails;