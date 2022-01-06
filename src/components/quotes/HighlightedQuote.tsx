import classes from './HighlightedQuote.module.css';

import Quote from "../../models/quote";
import React from 'react';

type Props = {
  text: Quote["text"],
  author: Quote["author"]
}

const HighlightedQuote: React.FC<Props> = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};


export default HighlightedQuote;
