import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import open from "../../assets/folder.svg";
import "./Posts.css";

function Posts(): React.ReactElement {
  const [columnsCounter, setColumnsCounter] = React.useState(1);
  const store = useSelector((state: RootState) => state);
  const postsState = store.posts;

  const id = +window.location.pathname.replace(/\D/gi, "");
  const posts = postsState.filter((post) => post.userId === id);

  function columnsCounterHandler(arg: string) {
    if (arg === "add" && columnsCounter < 5) {
      setColumnsCounter(columnsCounter + 1);
    }
    if (arg === "remove" && columnsCounter > 1) {
      setColumnsCounter(columnsCounter - 1);
    }
  }

  return (
    <section className="Posts">
      <article className="Posts__columns-setter">
        <h3 className="Posts__columns-setter-title">
          Количество&nbsp;колонок:&nbsp;
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="Posts__columns-setter-button"
            style={{ paddingTop: "0" }}
            onClick={() => {
              columnsCounterHandler("remove");
            }}
          >
            -
          </button>
          <h3 className="Posts__columns-setter-title">
            &nbsp;{columnsCounter}&nbsp;
          </h3>
          <button
            className="Posts__columns-setter-button"
            onClick={() => {
              columnsCounterHandler("add");
            }}
          >
            +
          </button>
        </div>
      </article>
      <div
        className="Posts-container"
        style={{
          gridTemplateColumns: `repeat(${columnsCounter}, ${
            (100 - columnsCounter) / columnsCounter
          }%)`,
        }}
      >
        {posts.map((post, index) => (
          <div className="Post" key={index}>
            <div className="Post__text-container">
              <h2 className="Post-title post-preview" title={`${post.title}`}>
                {post.title}
              </h2>
              <h4 className="post-preview" title={`${post.body}`}>
                {post.body}
              </h4>
            </div>
            <Link to={`/post/${post.id}`} className="Post__open-button">
              <img alt="Смотреть полностью" src={open} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Posts;
