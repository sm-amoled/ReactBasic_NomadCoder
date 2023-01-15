import { useState } from "react";
import About from "./about";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>hello, world! {counter} </h1>
      <button onClick={() => setCounter((current) => current + 1)}>
        button
      </button>
      <About />
      <style jsx>
        {`
          a {
            font-color: white;
          }
        `}
      </style>
    </div>
  );
}
