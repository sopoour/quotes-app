type Quote = {
  //make comments optional with ? since not every quote has to have comments
  id: string;
  author: string;
  text: string;
  comments?: {
    id: string;
    text: string;
  };
}

export default Quote;