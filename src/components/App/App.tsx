import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addUser } from "../../redux/usersReducer";
import { addPost } from "../../redux/postsReducer";
import { UserData, Message } from "../../utils/types";
import { getUsers, getPosts } from '../../utils/Api'
import Header from "../Header/Header";
import Users from "../Users/Users";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
/* import User from "../User/User";
import Posts from "../Posts/Posts";
import Post from "../Post/Post"; */
import "./App.css";

function App(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const [dataLoaded, setDataLoaded] = React.useState(false)
  const [dataLoading, setDataLoading] = React.useState(false)

  React.useEffect(() => {
    setDataLoading(true)
    Promise.all([
      getUsers(),
      getPosts()
    ]).then(([users, posts]) => {
    if (users) {
      (users as [UserData]).forEach((user) => {
        dispatch(addUser({ user }));
      })
    }
    if (posts) {
      (posts as [Message]).forEach((post, index) => {
      dispatch(addPost({ post }));
      if (index === (posts as [Message]).length - 1) {
        setDataLoaded(true)
        setDataLoading(false)
      }
      })
    }
  })
  }, [dispatch])

  React.useEffect(() => {
    if((!dataLoaded || dataLoading) && window.location.pathname !== "/users") {
      window.location.replace('users')
    }
  }, [dataLoaded, dataLoading])

  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/users">
            <Users />
          </Route>
          <ProtectedRoute
                exact path="/"
                component={Main}
                dataLoaded={dataLoaded}
                dataLoading={dataLoading}
                />
              <Route>
                {!dataLoaded || dataLoading ? <Redirect to="/users" /> : <Main />}
              </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
