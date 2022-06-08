import { useCallback, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Movie from "../components/Movie";
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
        <div>
          <Link to="/" className="home-button">
            Go Home
          </Link>
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            img={movie.medium_cover_image}
            genres={movie.genres}
            description={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
