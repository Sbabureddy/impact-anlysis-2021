import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Users from "./components/Users/Users";
import UserProfile from "./components/Users/UserProfile";
import { userAPI } from "./service/userService";
import Rejected from "./components/Rejected";
import Accepted from "./components/Accepted";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userAPI(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <div>
        <ul className="header">
          <li className="button button-accept margin-right">
            <Link to="/accepted">Accepted</Link>
          </li>
          <li className="button button-reject margin-right">
            <Link to="/rejected">Rejected</Link>
          </li>
        </ul>

        <hr />
      </div>
      <Switch>
        <Route exact path="/">
          <Users users={users} setUsers={setUsers} />
        </Route>
        <Route exact path="/rejected">
          <Rejected />
        </Route>
        <Route exact path="/accepted">
          <Accepted />
        </Route>
        <Route exact path="/:id">
          <UserProfile users={users} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
