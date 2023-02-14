import React from 'react';
import './Card.css';
const Card = () => {
  return (
    <li className="recipe-card">
      <img
        className="recipe-card__heart"
        src="/assets/img/icons/empty-heart.svg"
        alt="heart icon"
      />
      <img
        className="recipe-card__img"
        src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"
        alt="recipe img"
      />
      <h3 className="recipe-card__title">Spinach and Cheese Sandwich</h3>
      <div className="recipe-card__rating">
        <input type="radio" id="star5" name="rate" value="5" />
        <label htmlFor="star5" title="5 stars" />
        <input type="radio" id="star4" name="rate" value="4" />
        <label htmlFor="star4" title="4 stars" />
        <input type="radio" id="star3" name="rate" value="3" />
        <label htmlFor="star3" title="3 stars" />
        <input type="radio" id="star2" name="rate" value="2" />
        <label htmlFor="star2" title="2 stars" />
        <input type="radio" id="star1" name="rate" value="1" />
        <label htmlFor="star1" title="1 star" />
      </div>
    </li>
  );
};

export default Card;
