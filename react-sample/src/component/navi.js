import React from "react";
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  const history = useHistory();
  const handleLink = (path) => {
    return (
      history.push(path), //pathの中には下記buttonタグ内のhandlelinkのかっこの中のパスが代入される
      console.log(path)
    );
  };
  return (
    <div>
      <h1>Linkコンポーネントなしバージョン</h1>
      <nav>
        <button onClick={() => handleLink("/about/100")}>About</button>
        <button onClick={() => handleLink("/id/7721221")}>ID</button>
        <button onClick={() => handleLink("/users")}>Users</button>
        <button onClick={() => handleLink("/topics")}>Topics</button>
        <button onClick={() => handleLink("/")}>Home</button>
      </nav>
    </div>
  );
};

export default Nav;
