import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Information.module.css";

function Information({
  backgroundImageURL,
  title,
  coverImageURL,
  description,
}) {
  return (
    <div>
      <img className={styles.bg} src={backgroundImageURL} />
      <div className={styles.showInfo}>
        <img src={coverImageURL} />
        <div>
          <h2>title: {title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
