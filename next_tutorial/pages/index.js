import Seo from "../components/Seo";

import { useEffect, useState } from "react";

export default function Home({ results }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    console.log("Home function");
    (async () => {
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />

      {!movies ? <h4>Loading...</h4> : null}
      <div className="movieTable">
        {movies?.map((movie) => {
          return (
            <div className="movieCell" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .movieTable {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .movieCell {
            max-width: 180px;
            padding: 15px 0px 0px 0px;
          }

          .movieCell img {
            max-width: 180px;
            border-radius: 10px;
          }

          .movieCell img:hover {
            transition-duration: 0.4s;
            scale: 1.1;
          }

          .movieCell h4 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("getServerSideProps function");
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
