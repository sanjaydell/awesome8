import React from "react";
import './BookCard.css'

function BookCard() {
  return (
    <div className="bookCard">
      <div className="image">
        <img src="image.png" alt="logo" />
      </div>
      <div className="content">
        <div className="name">
          <span>Name</span>
        </div>
        <div className="details">
          <span>d%</span>
          <span>price 7</span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
