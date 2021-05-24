import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Users = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Users.jsファイルだよ</h2>
      <h2>ネストします</h2>
      <ul>
        <li>
          <Link to={`${match.url}/nestuser`}>クリックしてnestUserを表示</Link>
        </li>
        <li>
          <Link to={`${match.url}/nestuser2`}>➁クリックしてnestUserを表示</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/nestuser`}>
          <p>こんにちは</p>
        </Route>
        <Route path={`${match.path}/nestuser2`}>
          <p>こんばんは</p>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
