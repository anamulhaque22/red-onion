import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodItem from '../FoodItem/FoodItem';

const Breakfast = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    useEffect(() => {
        fetch('foodMenu.json')
            .then(response => response.json())
            .then(data => setBreakfastItems(data.breakfast));
    }, [])
    console.log(breakfastItems);
    return (
        <Container>
            <Row>
                {
                    breakfastItems.map(item => <FoodItem item={item} key={item.id}></FoodItem>)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;