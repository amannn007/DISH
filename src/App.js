import React, { useState, useEffect } from 'react';
import DishList from './components/DishList';
import './App.css';
import dishesData from './data/dishes.json';  // Import JSON data

const App = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Set the dishes state with the imported data
    setDishes(dishesData);
  }, []);

  const togglePublishedStatus = (dishId) => {
    setDishes(prevDishes => 
      prevDishes.map(dish => 
        dish.dishId === dishId ? { ...dish, isPublished: !dish.isPublished } : dish
      )
    );
  };

  return (
    <div className="App">
      <h1>Dish Dashboard</h1>
      <DishList dishes={dishes} onTogglePublishedStatus={togglePublishedStatus} />
    </div>
  );
};

export default App;
