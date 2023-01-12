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
    console.log(movieContents);
  }, []);

  return (
    // container
    <div className={styles.container}>
      {/* slide box */}
      <div className={styles.slide__show}>
        {/* slide cell */}
        <div className={styles.slide}>
          {movieContents.map((movie, index) => {
            return (
              <Movie
                id={movie.id}
                key={movie.id}
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
          Left Button
        </button>
        <button className={styles.right} onClick={onClickR}>
          Right Button
        </button>
      </div>
    </div>
  );
}

export default Slide;
