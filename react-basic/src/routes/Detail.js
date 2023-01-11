import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>details</h1>
      <Link to={"/"}>go back</Link>

      {isLoading ? (
        <h2>is loading...</h2>
      ) : (
        <div>
          <h2>title: {movie.title_long}</h2>
          <img src={movie.medium_cover_image} />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
