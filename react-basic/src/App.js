import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write Your To-Do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  );
}

export default App;
