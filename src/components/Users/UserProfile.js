import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const UserProfile = ({ users, match }) => {
  console.log(match);
  const renderUser = users
    .filter((user) => user.id === match.params.id)
    .map((user) => (
      <section key={user.id} className="card">
        <img src={user.Image} alt={user.name} className="card-image" />
        <div className="card-content">
          {user.name}
          <div className="button-group">
            <Link to="/">
              <button className="button button-accept">Accepted</button>
            </Link>
            <Link to="/">
              <button className="button button-reject">Rejected</button>
            </Link>
          </div>
        </div>
      </section>
    ));

  return <div>{renderUser}</div>;
};

export default withRouter(UserProfile);
