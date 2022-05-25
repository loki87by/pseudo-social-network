import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addUser } from "../../redux/usersReducer";
import { UserData } from "../../utils/types";
import { getUsers } from '../../utils/Api'
import Header from "../Header/Header";
import Users from "../Users/Users";
import User from "../User/User";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import "./App.css";

function App(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    getUsers().then((res) => {
      (res as [UserData]).forEach((user) => {
        dispatch(addUser({ user }));
      })
    })
    
  }, [dispatch])
  React.useEffect(() => {
    if(window.location.pathname === "/") {
      window.location.replace('users')
    }
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user">
            <User />
            </Route>
          <Route path="/posts/">
            <Posts />
            </Route>
          <Route path="/post/">
            <Post />
            </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
