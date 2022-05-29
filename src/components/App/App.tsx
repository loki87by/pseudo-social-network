import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addUser } from "../../redux/usersReducer";
import { addPost } from "../../redux/postsReducer";
import { addComments, addNewComment } from "../../redux/commentsReducer";
import { UserData, Message, Comment } from "../../utils/types";
import { getUsers, getPosts, getComments, saveComments } from '../../utils/Api'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Users from "../Users/Users";
import Main from "../Main/Main";
import Input from "../Input/Input";
import "./App.css";

function App(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const [dataLoaded, setDataLoaded] = React.useState(false)
  const [dataLoading, setDataLoading] = React.useState(false)
  const [isUsersPage, setUsersPage] = React.useState(true)
  const [isPopupOpened, setPopupOpened] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [commentName, setCommentName] = React.useState('')
  const [commentText, setCommentText] = React.useState('')
  const [postId, setPostId] = React.useState(NaN)

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
    if(dataLoaded) {
      getComments().then((comments) => {
        (comments as [Comment]).forEach((comment) => {
          dispatch(addComments({ comment }));
        })
      })
    }
  }, [dataLoaded, dispatch])

  React.useEffect(() => {
    if((!dataLoaded || dataLoading) && window.location.pathname !== "/users") {
      window.location.replace('users')
    }
  }, [dataLoaded, dataLoading])

  function closePopup() {
    setPopupOpened(false)
  }

  function saveComment(e: React.SyntheticEvent) {
    e.preventDefault()
    closePopup()
    saveComments(postId, commentName, email, commentText)
    .then((res) => {
      if(res) {
        const { postId, name, email, body, id} = (res as Comment)
      dispatch(addNewComment({postId, name, email, body, id}));
      }
    })
  }

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
                setPopupOpened={setPopupOpened}
                setPostId={setPostId}
                />
              <Route>
                {!dataLoaded || dataLoading ? <Redirect to="/users" /> : <Main setPopupOpened={setPopupOpened} setUsersPage={setUsersPage} setPostId={setPostId} />}
              </Route>
        </Switch>
      </main>
    <section className={`popup ${isPopupOpened && "popup_opened"}`}>
      <form className="popup__container">
        <button className="popup__close" type="reset" aria-label="Закрыть" onClick={closePopup}></button>
        <h2 className="popup__title">Добавить комментарий</h2>
        <Input data={email} setData={setEmail} type='email' name='email' text='email' />
        <Input data={commentName} setData={setCommentName} type='text' name='comment-name' text='тему/название комментария' />
        <Input data={commentText} setData={setCommentText} type='text' name='text' text='текст комментария' textArea/>
        <button className="popup__submit" type="button" onClick={saveComment}>Сохранить комментарий</button>
      </form>
    </section>
    </>
  );
}

export default App;
