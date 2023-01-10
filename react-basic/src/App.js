import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello JS World</h1>
      <Button text={"Continue"} />
      <button>stop</button>
    </div>
  );
}

export default App;
