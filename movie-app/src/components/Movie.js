import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, img, summary, description, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <img className="image" src={img} alt={title} />
        <div className="information">
          <h1 className="title">{title}</h1>
          <p className="summary">
            {summary.length <= 500 ? summary : `${summary.slice(0, 500)}...`}
          </p>
          <p className="summary">{description}</p>
          <ul className="genres">
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
