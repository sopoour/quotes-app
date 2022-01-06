import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";
import Comment from "../../models/comment";

type Props = {
  comments: Comment[];
};

const CommentsList: React.FC<Props> = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
