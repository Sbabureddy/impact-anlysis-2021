import { useState } from "react";
import { Link } from "react-router-dom";
const Users = ({ users, setUsers }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredUsers = !query
    ? users
    : users.filter((user) => user.name.match(new RegExp(query, "gi")));

  const createMarkup = (html) => ({ __html: html });

  const renderUsers = filteredUsers.map((user) => (
    <Link to={`/${user.id}`} key={user.id}>
      <section className="card">
        <img
          src={user.Image}
          alt={user.name}
          className="card-image"
          loading="lazy"
          height="80px"
        />
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
      <button
        onClick={() => {
          const asc = [...filteredUsers].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setUsers(asc);
        }}
      >
        Ascending order
      </button>
      <button
        onClick={() => {
          const asc = [...filteredUsers].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          setUsers(asc);
        }}
      >
        Desending order
      </button>
    </>
  );
};

export default Users;
