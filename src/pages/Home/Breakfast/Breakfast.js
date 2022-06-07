import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';

const Breakfast = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('foodMenu.json')
            .then(response => response.json())
            .then(data => setBreakfastItems(data.breakfast));
    }, []);
    const handleFoodDetails = (item) => {
        navigate(`/${item.id}`);
    }
    return (
        <Container>
            <Row>
                {
                    breakfastItems.map(item => <FoodItem item={item} handleFoodDetails={handleFoodDetails} key={item.id}></FoodItem>)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;