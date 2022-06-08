import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, img, summary, description, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <img className="image" src={img} alt={title} />
        <div>
          <h1 className="title">{title}</h1>
          <p className="summary">{summary}</p>
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
