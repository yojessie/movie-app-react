import { useCallback, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import "./Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="section">
          <Link to="/" className="home-button">
            Go back
          </Link>
          <div className="detail">
            <img
              className="image-large"
              src={movie.large_cover_image}
              alt={movie.title}
            />
            <h1 className="title">{movie.title}</h1>
            <ul className="genres">
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <p className="description">{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
