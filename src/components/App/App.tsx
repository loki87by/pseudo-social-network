import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Users from "../Users/Users";
import User from "../User/User";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import "./App.css";

function App(): React.ReactElement {
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
