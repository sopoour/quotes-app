import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFormFocus = () => {
    //when the user clicked into any form field, we set it true 
    //this is then used to show the Prompt when leaving the page
    setIsEntering(true);
  };

  return (
    <Fragment>
      {/* to show a prompt warning if a user typed in something into the form and clicks on the back button/leaves the page
      we can use the Prompt component from react-router-dom */}
      <Prompt
        when={isEntering}
        /* with location we could also show the path */
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost."
        }
      />
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
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            {/* to not get the prompt when we actually wanna submit the quote we set it to false */}
            <button onClick={() => setIsEntering(false)} className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
