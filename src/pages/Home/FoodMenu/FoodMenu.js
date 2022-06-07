import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './FoodMenu.css'
const FoodMenu = () => {
  const [isLunch, setIsLunch] = useState(true);
  const [isBreakbase, setIsBreakFast] = useState(false);
  const [isDinner, setIsDinner] = useState(false);

  const renderLunchComponent = () => {
    setIsLunch(true)
    setIsDinner(false);
    setIsBreakFast(false);
  }
  const renderDinnerComponent = () => {
    setIsDinner(true);
    setIsBreakFast(false);
    setIsLunch(false);
  }
  const renderBreakfaseComponent = () => {
    setIsBreakFast(true);
    setIsLunch(false);
    setIsDinner(false);
  }
  return (
    <div className='food-menu'>
      <div className='food-nav'>
        <ul>
          <li><button  onClick={renderDinnerComponent}>Dinner</button></li>
          <li><button  onClick={renderLunchComponent}>Lunch</button></li>
          <li><button  onClick={renderBreakfaseComponent}>Breakfast</button></li>
        </ul>
      </div>
      {isLunch && <Lunch></Lunch>}
      {isDinner && <Dinner></Dinner>}
      {isBreakbase && <Breakfast></Breakfast>}
    </div>
  );
};

export default FoodMenu;