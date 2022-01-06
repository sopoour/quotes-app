import classes from "./CommentItem.module.css";

type Props = {
  text: string;
};

const CommentItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
