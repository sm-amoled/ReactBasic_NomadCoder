import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("App function");
  return (
    <div>
      {console.log("before component function")}
      <Layout childrens={<Component {...pageProps} />} />
      {console.log("after component function")}
    </div>
  );
}
