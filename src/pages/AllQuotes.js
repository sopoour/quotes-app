import React from "react";
import QuoteList from "../components/quotes/QuoteList";



const AllQuotes = (props) => {
    return (
        <React.Fragment>
            <QuoteList quotes={props.quotes}></QuoteList>
        </React.Fragment>
    );
};

export default AllQuotes;