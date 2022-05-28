import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserPlaces } from "../../utils/types";
/* import { UserProps } from "../../utils/types"; */
import "./User.css";

function User(/* props: UserProps */): React.ReactElement {
  const store = useSelector((state: RootState) => state);
  const usersState = store.users;
  const postsState = store.posts;

  const id = +window.location.pathname.replace(/\D/gi, "");
  const user = usersState.find((item) => item.id === id);
  const posts = postsState.filter((post) => post.userId === id);
  const postsPreview = posts.slice(0, 3);

  return (
    <section className="User">
      <article className="User__data">
        <div></div>
        <h2 className="User__data-username">{user?.username}</h2>
        <div></div>
        <div></div>
        <div className="User__data-description">
          <div>
            <h3>{user?.name}</h3>
          </div>
          <div>
            <h3>{user?.email}</h3>
          </div>
          <div>
            <h3>{user?.phone}</h3>
          </div>
          <div>
            <h3>{user?.website}</h3>
          </div>
        </div>
        <div></div>
      </article>
      <article className="User__data-company">
        <div className="User__data-company-name">
          <h2>Место работы:</h2>
          <h3>{(user?.company as UserPlaces).name}</h3>
        </div>
        <h3>{(user?.company as UserPlaces).bs}</h3>
      </article>
      <article className="User__data-posts">
        <h2>Посты:</h2>
        <div className="User__data-posts-container">
          {postsPreview.map((post, index) => (
            <div className="User__data-post" key={index}>
              <h2
                className="User__data-post-title User__data-post-preview"
                title={`${post.title}`}
              >
                {post.title}
              </h2>
              <h4 className="User__data-post-preview" title={`${post.body}`}>
                {post.body}
              </h4>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default User;
