import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Movie from "../components/Movie";
import Slide from "../components/Slide";
import Loading from "../components/Loading";

import styles from "../styles/Home.module.css";

const navList = [
  {
    title: "High Rating",
    path: "minimum_rating=7",
  },
  {
    title: "Romance",
    path: "genre=romance",
  },
  {
    title: "Thriller",
    path: "genre=thriller",
  },
  {
    title: "Animation",
    path: "genre=animation",
  },
];

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?genre=romance"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slide__box}>
        <h3 className={styles.title}>
          {/* <Link to={`/page/${slide.path}/1`}> */}
          <span>로맨스 영화</span>
          {/* </Link> */}
        </h3>
        {isLoading ? <Loading /> : <Slide movieContents={movies} />}
      </div>
    </div>
  );
}

export default Home;
