import { useState } from "react";
import { Link } from "react-router-dom";
const Users = ({ users }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredUsers = !query
    ? users
    : users.filter((user) => user.name.match(new RegExp(query, "gi")));

  const createMarkup = (html) => ({ __html: html });

  const renderUsers = filteredUsers.map((user) => (
    <Link to={`/${user.id}`}>
      <section key={user.id} className="card">
        <img src={user.Image} alt={user.name} className="card-image" />
        <div
          className="card-content"
          dangerouslySetInnerHTML={createMarkup(
            user.name.replace(
              new RegExp(query, "gi"),
              (match) => `<mark style="background: yellow">${match}</mark>`
            )
          )}
        />
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
      <section className="users-list">{renderUsers}</section>
    </>
  );
};

export default Users;
