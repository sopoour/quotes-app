type Quote = {
  id?: string;
  author: string;
  text: string;
  comments?: {
    id: string;
    text: string;
  };
}

export default Quote;