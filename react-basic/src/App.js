import { useState, useEffect } from "react";

function App() {
  const [isShowing, setIsShowing] = useState(true);
  const onClick = () => {
    setIsShowing((current) => !current);
  };

  return (
    <div>
      <button onClick={onClick}>{isShowing ? "hide" : "show"}</button>
      <Coffee isShowing={isShowing} />
    </div>
  );
}

function Coffee(isShowing) {
  function created() {
    console.log("created");
    return destroyed;
  }
  function destroyed() {
    console.log("destroyed");
  }

  useEffect(() => {
    console.log("Coffee is here");
    return () => console.log("Coffee isn't here");
  }, [isShowing]);

  return <h1>{isShowing ? "show" : "hide"}</h1>;
}

export default App;
