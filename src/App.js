import { Route, Redirect, Switch } from "react-router-dom";
import { useState } from "react";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: "q1",
      author: "Sophia",
      text: "this is a quote by sophia",
    },
    {
      id: "q2",
      author: "Anna",
      text: "this is a quote by Anna",
    },
  ]);

  const handleAddQuote = (newQuote) => {
    console.log("In app:" + newQuote);
    setQuotes((prevQuotes) => {
      return [newQuote, ...prevQuotes];
    });
  };

  console.log(quotes);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes quotes={quotes} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={quotes} />
        </Route>
        <Route path="/new-quote">
          <AddQuote onAddQuote={handleAddQuote} />
        </Route>
        {/* To add a catch-all/404/not found page just put the path to the star and at the total end of the Switch */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
