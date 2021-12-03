import { Route, Navigate, Routes } from "react-router-dom";
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
      {/* in v5 we use Swtich, and in v6 react-router-dom we use Routes */}
      <Routes>
        {/* with v6 we don't need the "exact" tag anymore cuz it's always exact path */}
        <Route path="/quotes-app" /* exact */ element={<Navigate replace to="quotes" />} />
        {/* in v5 we used Redirect in v6 we use "Navigate replace to" within the Route */}
        {/* <Redirect to="/quotes" /> */}

        {/* in v5 we wrapped the Route component around the shown component
        in v6 we have a self-closing Route component with element that contains the shown component */}
        <Route path="/quotes-app/quotes" element={<AllQuotes />} />
        <Route
        /* To allow nested routes within this route use "*" */
          path="/quotes-app/quotes/:quoteId/*"
          element={<QuoteDetail quotes={quotes} />}
        />
        <Route
          path="/quotes-app/new-quote"
          element={<AddQuote onAddQuote={handleAddQuote} />}
        />
        {/* To add a catch-all/404/not found page just put the path to the star and at the total end of the Switch */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
