import Link from "next/Link";
import { useRouter } from "next/Router";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <nav>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: ${true ? "yellow" : "blue"};
          }
        `}</style>
        <style jsx global>
          {`
            a {
              color: orange;
            }
          `}
        </style>
        <a>JSX 적용됨</a>
      </nav>
      <a>JSX 적용 안됨</a>
    </div>
  );
}
