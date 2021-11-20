import { useState } from "react";
import { Link } from "react-router-dom";
const Users = ({ users }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const renderUsers =
    users &&
    users.map((user) => (
      <Link to={`/${user.id}`}>
        <section key={user.id} className="card">
          <img src={user.Image} alt={user.name} className="card-image" />
          <div className="card-content">{user.name}</div>
        </section>
      </Link>
    ));

  const renderFilteredUsers = users
    .filter(
      (user) => query.length > 0 && user.name.match(new RegExp(query, "gi"))
    )
    .map((user) => (
      <Link to={`/${user.id}`}>
        <section key={user.id} className="card">
          <img src={user.Image} alt={user.name} className="card-image" />
          <div className="card-content">{user.name}</div>
        </section>
      </Link>
    ));

  return (
    <>
      <input
        type="search"
        value={query}
        placeholder="Search Applicants here..."
        onChange={handleChange}
        className="search-input"
      />
      <section className="users-list">
        {query.length > 0 ? renderFilteredUsers : renderUsers}
      </section>
    </>
  );
};

export default Users;
