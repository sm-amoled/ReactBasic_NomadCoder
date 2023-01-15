import NavBar from "../components/NavBar";
import css from "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />;
    </div>
  );
}
