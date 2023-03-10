import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImage, title, year, summary, genres, movie_style }) {
  if (coverImage == "") {
    return null;
  }

  return (
    <div className={styles.movie} style={movie_style}>
      <img className={styles.movie__img} src={coverImage} />
      <div className={styles.movie__contents}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title.length >= 50 ? `${title.slice(0, 50)}...` : title}
          </Link>
        </h2>
        <h3 className={styles.movie__year}>({year})</h3>
        <ul className={styles.movie__genre}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
