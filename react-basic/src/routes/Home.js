import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Movie from "../components/Movie";
import Slide from "../components/Slide";
import Loading from "../components/Loading";

import styles from "../styles/Home.module.css";
import navList from "../navList";
import { getDefaultNormalizer } from "@testing-library/react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let dataList = [];

    for (const { title, path } of navList) {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?${path}`
      );
      const json = await response.json();
      setMovies((data) => [json.data, ...movies]);
      dataList = [json.data, ...dataList];
      // console.log(dataList);
    }

    console.log("update data");
    // setMovies(movies);
    setMovies(dataList);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        navList.map(({ title, path }, index) => {
          return (
            <div key={index} className={styles.container}>
              <div className={styles.slide__box}>
                {isLoading ? null : (
                  <h3 className={styles.title}>
                    {/* <Link to={`/page/${slide.path}/1`}> */}
                    <span>{title}</span>
                    {/* </Link> */}
                  </h3>
                )}

                <Slide movieContents={movies[index]} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Home;
