import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  const iRunOnlyOnce = () => {
    console.log("Call Only Once");
  };
  useEffect(iRunOnlyOnce, []);
  // console.log("Search For", keyword);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />

      <h1>{counter}</h1>
      <button onClick={onClick}>Count Up</button>
    </div>
  );
}

export default App;
