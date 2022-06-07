import React from 'react';
import { Col } from 'react-bootstrap';
import './FoodItem.css';
const FoodItem = ({item, handleFoodDetails}) => {
    const{img, name, price, description} = item;
    console.log(handleFoodDetails);
    return (
        <Col md={4}>
            <div className="single-food-item text-center">
                <img src={img} className='img-fluid' alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <p className='price'>$ {price}</p>
                <button onClick={() => handleFoodDetails(item)}>See details</button>
            </div>
        </Col>
    );
};

export default FoodItem;