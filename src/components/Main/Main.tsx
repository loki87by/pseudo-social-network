import React from "react";
import { Route, Switch } from "react-router-dom";
import User from "../User/User";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import './Main.css'

function Main(): React.ReactElement {

  return (
    <div className="content">
        <Switch>
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
    </div>
  );
}

export default Main;
