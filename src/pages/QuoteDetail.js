import { Fragment, useEffect } from "react";
//useRoutematch is similar to useLocation but has more information about internally managed data
import {
  useParams,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = (props) => {
  //in v6 this is not needed anymore since we using relative paths within nested route
  /* const match = useRouteMatch(); */
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;
  //find the right data from right quote item (quote.id) that matches the opened detail page (params.quoteId)
  // no longer used since we do the mathcing differently through http
  //const quote = props.quotes.find((quote) => quote.id === params.quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* in order to hide the "loaded comments" once clicked and hence when we're on /comments page */}
      <Routes>
        <Route
          path={"/"}
          element={
            <div className={"centered"}>
              {/* match.url gives us the exact url and not the relative path with :quoteId */}
              <Link className="btn--flat" to={"comments"}>
                Load Comments
              </Link>
            </div>
          }
        />
        {/*To make the path a bit more dynamic (in case we change it in our App.js
        we can use instead of "/quotes/${params.quoteId}" just the match.path that gives the current path)  
        in v6 you don't need match.path anymore because the path of a nested Route is relative to its parent*/}
        <Route path={"comments"} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
