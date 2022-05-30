import React from "react";
import { Route, Switch } from "react-router-dom";
import User from "../User/User";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import { MainProps } from "../../utils/types";
import "./Main.css";

function Main(props: MainProps): React.ReactElement {
  React.useEffect(() => {
    props.setUsersPage(false);
  }, [props]);

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
          <Post
            setPopupOpened={props.setPopupOpened}
            setPostId={props.setPostId}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
