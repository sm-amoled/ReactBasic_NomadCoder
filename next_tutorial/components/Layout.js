import NavBar from "./NavBar";

export default function Layout({ childrens }) {
  // children : ReactJS에서 제공하는 프로퍼티
  // 컴포넌트 내에 다른 컴포넌트를 넣을 때 사용할 수 있음.
  return (
    <>
      <NavBar />
      <div>{childrens}</div>
    </>
  );
}
