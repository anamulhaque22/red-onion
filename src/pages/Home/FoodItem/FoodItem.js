import React from 'react';
import { Col } from 'react-bootstrap';
import './FoodItem.css';
const FoodItem = ({item}) => {
    const{img, name, price, description} = item;
    return (
        <Col md={4}>
            <div className="single-food-item text-center">
                <img src={img} className='img-fluid' alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <p className='price'>$ {price}</p>
            </div>
        </Col>
    );
};

export default FoodItem;