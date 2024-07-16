import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, onTogglePublishedStatus }) => {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard 
          key={dish.dishId} 
          dish={dish} 
          onTogglePublishedStatus={onTogglePublishedStatus} 
        />
      ))}
    </div>
  );
};

export default DishList;
