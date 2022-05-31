import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserPlaces } from "../../utils/types";
import left from "../../assets/triangular-left.svg";
import right from "../../assets/triangular-right.svg";
import "./User.css";

function User(): React.ReactElement {
  const store = useSelector((state: RootState) => state);
  const usersState = store.users;
  const postsState = store.posts;
  const history = useHistory();

  let id = +window.location.pathname.replace(/\D/gi, "");
  const currentUser = usersState.find((item) => item.id === id);
  const currentUserPosts = postsState.filter((post) => post.userId === id);
  const currentUserPostsPreview = currentUserPosts.slice(0, 3);
  const [user, changeUser] = React.useState(currentUser);
  const [postsPreview, changePostsPreview] = React.useState(
    currentUserPostsPreview
  );

  const routeChange = (arg: boolean) => {
    let newId = NaN;

    if (arg) {
      newId = id + 1;
    } else {
      newId = id - 1;
    }
    const path = `user/${newId}`;
    history.replace(path);
    id = newId;
    const user = usersState.find((item) => item.id === newId);
    changeUser(user);
    const posts = postsState.filter((post) => post.userId === newId);
    const postsPreview = posts.slice(0, 3);
    changePostsPreview(postsPreview);
  };

  return (
    <section className="User">
      <article className="User__data">
        <div></div>
        <h2 className="User__data-username">{user?.username}</h2>
        <div></div>
        <div
          style={id > 1 ? { display: "flex", justifyContent: "center" } : {}}
        >
          {id > 1 ? (
            <img
              alt="Предыдущий пользователь"
              onClick={() => {
                routeChange(false);
              }}
              src={left}
              className="User__data-button"
            />
          ) : (
            ""
          )}
        </div>
        <div className="User__data-description">
          <div>
            <h3>{user?.name}</h3>
          </div>
          <div>
            <a href={`mailto: ${user?.email}`}>{user?.email}</a>
          </div>
          <div>
            <a href={`tel: ${user?.phone}`}>{user?.phone}</a>
          </div>
          <div>
            <h3>{user?.website}</h3>
          </div>
        </div>
        <div
          style={
            id < usersState.length
              ? { display: "flex", justifyContent: "center" }
              : {}
          }
        >
          {id < usersState.length ? (
            <Link to={`/user/${id + 1}`}>
              <img
                alt="Следующий пользователь"
                onClick={() => {
                  routeChange(true);
                }}
                src={right}
                className="User__data-button"
              />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div></div>
        <div className="User__data-company-name">
          <h3>Место работы:</h3>
          <h3>{(user?.company as UserPlaces).name}</h3>
          <h3>{(user?.company as UserPlaces).bs}</h3>
        </div>
        <div></div>
      </article>
      <article className="User__data-posts">
        <h2>Посты:</h2>
        <div className="User__data-posts-container">
          {postsPreview.map((post, index) => (
            <Link
              style={{ width: "32%", textDecoration: "none" }}
              key={index}
              to={`/post/${post.id}`}
            >
              <div className="User__data-post">
                <h2
                  className="User__data-post-title post-preview"
                  title={`${post.title}`}
                >
                  {post.title}
                </h2>
                <h4 className="post-preview" title={`${post.body}`}>
                  {post.body}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <Link to={`/posts/${id}`} className="User__data-posts-button">
          Посмотреть все
        </Link>{" "}
      </article>
    </section>
  );
}

export default User;
