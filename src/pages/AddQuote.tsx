import React /* , {useState} */ from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import Quote from "../models/quote";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const AddQuote: React.FC = () => {
  //the addQuote function is used as request function (sendRequest) within useHttp
  //that takes the data passed on here (in our case the new quote)
  //we will get back also a state aka status that contains the status, data and eror value
  const { sendRequest, status } = useHttp(addQuote);
  //const [isLoading, setIsLoading] = useState(false)
  //Programatic navigation: useHistory allows us to move the user to another page when we added a quote
  // that's in v5
  // const history = useHistory();
  // in v6 we use instead useNavigate() hook
  const navigate = useNavigate();

  const handleEnterQuote = (quote: {author: Quote["author"], text: Quote["text"]}) => {
    sendRequest(quote);
  };

  useEffect(() => {
    if (status === "completed") {
      //methods to use within useHistory()
      //push method: we can go back to the previous page with the back button
      //replace method: it's a redirect and history is removed
      /* v5: history.push("/quotes"); */
      //now in v6:
      navigate("/", {replace: false})
    }
  }, [status, navigate]);

  return (
    <React.Fragment>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={handleEnterQuote}
      ></QuoteForm>
    </React.Fragment>
  );
};

export default AddQuote;
