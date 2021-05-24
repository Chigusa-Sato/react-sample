import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
const Topics = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>ネスト</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/components2`}>Components2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/components`}>
          <h3>components</h3>
          <p>reactでネスト</p>
        </Route>
        <Route path={`${match.path}/components2`}>
          <h3>components2</h3>
          <p>ネすとネスト</p>
        </Route>
      </Switch>
    </div>
  );
};

export default Topics;
