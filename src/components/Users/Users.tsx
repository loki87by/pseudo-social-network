import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Users.css";

function Users(): React.ReactElement {
  const store = useSelector((state: RootState) => state);
  const usersState = store.users;

  return (
    <section className="Users">
      <h2 className="Users__title">Пользователи</h2>
      <ul className="Users__list">
        {usersState.map((user, index) => (
          <li key={index}>
            <Link to={`/user/${user.id}`} className="Users__list-item">
              {user.name as string}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
