import { useState, useEffect } from "react";

function ReviewsInput() {
  return (
    <div className="reviews-input__wrapper">
      <h1>Оставьте рецензию</h1>
      <div className="reviews-input__name-input">
        <input type="text" placeholder="Имя"></input>
      </div>
      <div className="reviews-input__title-input">
        <input type="text" placeholder="Заголовок"></input>
      </div>
      <div className="reviews-input__textarea-input">
        <textarea type="text " placeholder="Текст"></textarea>
      </div>
      <button className="reviews-input__add-button">Отправить</button>
    </div>
  );
}

export default ReviewsInput;
