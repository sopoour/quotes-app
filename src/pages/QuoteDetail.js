import { Fragment } from "react";
//useRoutematch is similar to useLocation but has more information about internally managed data
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  //find the right data from right quote item (quote.id) that matches the opened detail page (params.quoteId)
  const quote = props.quotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* in order to hide the "loaded comments" once clicked and hence when we're on /comments page */}
      <Route path={match.path} exact>
        <div className={"centered"}>
            {/* match.url gives us the exact url and not the relative path with :quoteId */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/*To make the path a bit more dynamic (in case we change it in our App.js
        we can use instead of "/quotes/${params.quoteId}" just the match.path that gives the current path)  */}
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
