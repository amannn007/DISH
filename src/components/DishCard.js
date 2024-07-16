import React from 'react';
import './DishCard.css'; // Import CSS for DishCard styles

const DishCard = ({ dish, onTogglePublishedStatus }) => {
  const handleToggle = () => {
    onTogglePublishedStatus(dish.dishId);
  };

  return (
    <div className="dish-card">
      <div className="card-image">
        <img src={dish.imageUrl} alt={dish.dishName} />
      </div>
      <div className="card-content">
        <h2>{dish.dishName}</h2>
        <p>ID: {dish.dishId}</p>
        <p>Published: {dish.isPublished ? 'Yes' : 'No'}</p>
        <button onClick={handleToggle}>
          {dish.isPublished ? 'Unpublish' : 'Publish'}
        </button>
      </div>
    </div>
  );
};

export default DishCard;
