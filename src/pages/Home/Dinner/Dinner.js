import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodItem from '../FoodItem/FoodItem';
import './Dinner.css';
const Dinner = () => {
    const [dinnerItems, setDinnerItems] = useState([]);
    useEffect(() => {
        fetch('foodMenu.json')
        .then(response => response.json())
        .then(data => setDinnerItems(data.dinner));
    }, [])
    return (
        <Container>
            <Row>
            {
                dinnerItems.map(item => <FoodItem item = {item} key={item.id}></FoodItem>)
            }
        </Row>
        </Container>
    );
};

export default Dinner;