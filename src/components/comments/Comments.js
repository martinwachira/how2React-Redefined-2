import NewCommentForm from "./NewCommentForm";
import classes from "./Comments.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Comments = () => {
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {params.commentId}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
