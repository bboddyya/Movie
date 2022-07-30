import { getRatingColor } from "../../../utils/getColor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Movie.css";

function SliderElement({ filmId, rating, posterUrlPreview, nameRu }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      key={filmId}
      className="movie__wrapper"
    >
      <Link to={`/top250/${filmId}`}>
        <div className="movie__picture">
          <div
            className="movie__rating"
            style={{ backgroundColor: `${getRatingColor(rating)}` }}
          >
            {rating}
          </div>

          <motion.img
            src={posterUrlPreview}
            alt={`${nameRu}`}
            style={{ maxHeight: "430px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default SliderElement;
