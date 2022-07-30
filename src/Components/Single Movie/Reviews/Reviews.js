import ReviewsInput from "./ReviewsInputs/ReviewsInputs";
import ReviewsList from "./ReviewsList/ReviewsList";
import "./Reviews.scss";
function Reviews() {
  return (
    <div className="reviews__wrapper">
      <ReviewsInput />
      <ReviewsList />
    </div>
  );
}

export default Reviews;
