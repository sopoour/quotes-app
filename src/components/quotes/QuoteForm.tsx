import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Quote from "../../models/quote";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

type Props = {
  onAddQuote: (quote: {author: Quote["author"], text: Quote["text"]}) => void;
  isLoading: boolean;
};

const QuoteForm: React.FC <Props> = (props) => {
  const authorInputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFormFocus = () => {
    //when the user clicked into any form field, we set it true
    //this is then used to show the Prompt when leaving the page
    setIsEntering(true);
  };

  return (
    <React.Fragment>
      {/* to show a prompt warning if a user typed in something into the form and clicks on the back button/leaves the page
      we can use the Prompt component from react-router-dom */}
      {/*  in v6 the Prompt component is no longer supported
      <Prompt
        when={isEntering}
        /* with location we could also show the path 
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost."
        }
      /> */}

      <Card>
        <form
          onFocus={handleFormFocus}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows= {5} ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            {/* to not get the prompt when we actually wanna submit the quote we set it to false */}
            <button onClick={() => setIsEntering(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
