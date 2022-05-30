import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PostProps } from "../../utils/types";
import "./Post.css";

function Post(props: PostProps): React.ReactElement {
  const store = useSelector((state: RootState) => state);
  const postsState = store.posts;
  const commentsState = store.comments;

  const id = +window.location.pathname.replace(/\D/gi, "");
  const post = postsState.find((item) => item.id === id);
  const comments = commentsState.filter((comment) => comment.postId === id);

  function openPopup() {
    props.setPopupOpened(true);
    if (post) {
      props.setPostId(post.id as number);
    }
  }

  if (post) {
    return (
      <section className="Post__full">
        <article className="Post__text-container Post__text-container_full">
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </article>
        <h2 style={{ margin: "15px" }}>Комментарии:</h2>
        <article className="Post__comments-container">
          {comments.map((comment, index) => (
            <div key={index} className="Post__comment">
              <h3>Автор:&nbsp;{comment.email}</h3>
              <h2 className="Post__comment-name">{comment.name}</h2>
              <h3>{comment.body}</h3>
            </div>
          ))}
        </article>
        <button className="Post__comment-button" onClick={openPopup}>
          Комментировать
        </button>
      </section>
    );
  } else {
    return <></>;
  }
}

export default Post;
