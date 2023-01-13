import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "./Slide.module.css";

function Slide({ movieContents }) {
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 350);
  };

  const onClickR = () => {
    if (trans <= -2450) {
      return;
    }
    setTrans((current) => current - 350);
  };

  useEffect(() => {
    console.log(movieContents.movies);
  }, []);

  return (
    // container
    <div className={styles.container}>
      {/* slide box */}
      <div className={styles.slide__show}>
        {/* slide cell */}
        <div
          className={styles.slide}
          style={{ transform: `translateX(${trans}px)` }}
        >
          {console.log(movieContents.movies)}
          {movieContents.movies.map((movie, index) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                movie_style={{
                  minWidth: "350px",
                  height: "300px",
                }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button className={styles.left} onClick={onClickL}>
          prev
        </button>
        <button className={styles.right} onClick={onClickR}>
          next
        </button>
      </div>
    </div>
  );
}

export default Slide;
