import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UsersProps } from "../../utils/types";
import "./Users.css";

function Users(props: UsersProps): React.ReactElement {
  const [cardsStyle, setCardsStyle] = React.useState(true)
  const [styleSwitcherText, setStyleSwitcherText] = React.useState('Отобразить списком')
  const store = useSelector((state: RootState) => state);
  const usersState = store.users;
  React.useEffect(() => {
    props.setUsersPage(true);
  }, [props]);

  function changeUlType() {
    const newState = !cardsStyle
    setCardsStyle(newState)
    if (styleSwitcherText === 'Отобразить списком') {
      setStyleSwitcherText('Отобразить плиткой')
    } else {
      setStyleSwitcherText('Отобразить списком')
    }
  }

  return (
    <section className="Users">
      <div className="Users__header">
      <h2>Пользователи</h2>
      <button onClick={changeUlType}>{styleSwitcherText}</button>
      </div>
      <ul className={`Users__list ${cardsStyle && "Users__card-list"}`}>
        {usersState.map((user, index) => {
          return !cardsStyle ?
          <li key={index}>
            <Link to={`/user/${user.id}`} className="Users__list-item">
              {user.name as string} @{user.username as string}
            </Link>
          </li> :
          <li key={index} className="Users__list-card">
            <Link to={`/user/${user.id}`} className="Users__list-item">
              <div>
              <h3>{user.name as string}</h3>
              <h3>@{user.username as string}</h3>
              </div>
            </Link>
          </li>
})}
      </ul>
    </section>
  );
}

export default Users;
