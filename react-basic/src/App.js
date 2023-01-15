import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Bar from "./components/Navigation";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    //   <Bar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/movie/:id" element={<Detail />} />
    //   </Routes>
    // </Router>
    <div>
      <h1>Hello, World! {counter} </h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        button
      </button>
    </div>
  );
}

export default App;
