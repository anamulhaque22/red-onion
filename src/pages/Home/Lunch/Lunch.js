import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodItem from '../FoodItem/FoodItem';
import './Lunch.css'
const Lunch = () => {
    const [lunchItems, setLunchItems] = useState([]);
    useEffect(() => {
        fetch('foodMenu.json')
        .then(response => response.json())
        .then(data => setLunchItems(data.dinner));
    }, [])
    return (
        <Container>
            <Row>
            {
                lunchItems.map(item => <FoodItem item = {item} key={item.id}></FoodItem>)
            }
        </Row>
        </Container>
    );
};

export default Lunch;