import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  //it's better to get the quoteId via params within the Comments component
  //instead of within the NewCommentForm as the NewCommentForm could technically also be used somewhere else
  //in this way NewCommentForm stays more flexible and not restricted to the dependency
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  //I want to send a request to fetch my comments whenever this component loaded or changed → useEffect
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // we need useCallback here cuz it is passed to onAddedComment which is used as a dependency within a useEffect in NewCommentForm component
  // if we would not use useCallback the onAddedComment function (hence handleAddedComment) would be recreated
  // whenever the parent component (Comments) rerenders which leads to an infinite loop
  const handleAddedComment = useCallback(() => {
    //I want to send another request to fetch the updated comments list once I've added a comment
    sendRequest(quoteId);
    //when I added a comment I want the comment section to close again to only see the list of comments
    setIsAddingComment(false);
  }, [quoteId, sendRequest]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  //when we don't have comments yet
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddedComment={handleAddedComment} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
