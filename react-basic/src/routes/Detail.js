import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Information from "../components/Information";

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
      <Link to={"/"}>뒤로가기</Link>

      {isLoading ? (
        <h2>is loading...</h2>
      ) : (
        <div>
          <Information
            backgroundImageURL={movie.background_image}
            title={movie.title}
            coverImageURL={movie.medium_cover_image}
            description={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
