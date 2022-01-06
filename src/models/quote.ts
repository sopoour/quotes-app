import Comment from "./comment"

type Quote = {
  //make comments optional with ? since not every quote has to have comments
  id: string;
  author: string;
  text: string;
  comments?: Comment;
}

export default Quote;