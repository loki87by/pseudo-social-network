import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderProps } from "../../utils/types";
import "./Header.css";

function Header(props: HeaderProps): React.ReactElement {
  const history = useHistory();

  function back() {
    history.goBack()
  }

  return (
    <section className="Header">
      <h1 className="Header__title">Social Network</h1>
      {!props.isUsersPage ? <button className="Header__button" onClick={back}>&lt; &nbsp;Назад</button> : ''}
    </section>
  );
}

export default Header;
