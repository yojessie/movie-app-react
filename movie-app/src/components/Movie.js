import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, img, summary, description, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{description}</p>
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
