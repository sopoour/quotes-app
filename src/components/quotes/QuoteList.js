import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  /* v5: const history = useHistory(); */
  // in v6:
  const navigate = useNavigate();
  //get access to a location object that has information about the currently loaded URL/page
  const location = useLocation();

  //create a new object that can use the search param from the location object in a better way
  //URLSearchParams() is a built-in constructure function built into the browser
  //it basically splits up the string of query "?sort=asc" into a key value pair of "sort: asc"
  const queryParams = new URLSearchParams(location.search);

  //get a returned true or false when checked whether sort is asc
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const handleChangeSorting = () => {
    //update the query parameter in the URL depending on how the button is clicked and hence the current query is
    //use the current pathname instead of hard coding "quotes" in order to keep it dynamic
   /* v5:  history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    ); */

    //instead of having an awfully long string name as path name within push, we can also push an object
    //that is split up into pathname and search:
    /* v5: history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    }); */
    //in v6:
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    })

  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* when the current sort is ascending then the name of the button should be descending and the other way around */}
        <button onClick={handleChangeSorting}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
