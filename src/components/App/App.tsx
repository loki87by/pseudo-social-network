import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addUser } from "../../redux/usersReducer";
import { addPost } from "../../redux/postsReducer";
import { UserData, Message } from "../../utils/types";
import { getUsers, getPosts } from '../../utils/Api'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Users from "../Users/Users";
import Main from "../Main/Main";
import "./App.css";

function App(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const [dataLoaded, setDataLoaded] = React.useState(false)
  const [dataLoading, setDataLoading] = React.useState(false)
  const [isUsersPage, setUsersPage] = React.useState(true)

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
      <Header isUsersPage={isUsersPage}/>
      <main className="main">
        <Switch>
          <Route exact path="/users">
            <Users setUsersPage={setUsersPage}/>
          </Route>
          <ProtectedRoute
                exact path="/"
                component={Main}
                dataLoaded={dataLoaded}
                dataLoading={dataLoading}
                setUsersPage={setUsersPage}
                />
              <Route>
                {!dataLoaded || dataLoading ? <Redirect to="/users" /> : <Main  setUsersPage={setUsersPage}/>}
              </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
