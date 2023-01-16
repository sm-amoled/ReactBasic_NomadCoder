import Link from "next/Link";
import { useRouter } from "next/Router";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 10px;

          box-shadow: 0px 10px 10px gray;
        }
        img {
          max-width: 100px;
          width: 100%;
        }
        a {
          text-decoration: none;
          padding: 10px;
          font-weight: 600;
        }
        .active {
          color: ${true ? "tomato" : "black"};
        }
      `}</style>
    </nav>
  );
}
