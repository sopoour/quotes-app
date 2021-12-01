import React/* , {useState} */ from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm"

const AddQuote = (props) => {
    //const [isLoading, setIsLoading] = useState(false)
    //Programatic navigation: useHistory allows us to move the user to another page when we added a quote
    const history = useHistory()
    const handleEnterQuote = (quote) => {
        console.log(quote)
        const newQuote = {
            id: Math.random(),
            author: quote.author,
            text: quote.text
        }
        props.onAddQuote(newQuote)
        //methods to use within useHistory()
        //push method: we can go back to the previous page with the back button
        //replace method: it's a redirect and history is removed
        history.push("/quotes")
    }


    return (
        <React.Fragment>
            <QuoteForm isLoading={false} onAddQuote={handleEnterQuote}>

            </QuoteForm>
        </React.Fragment>
    )
}

export default AddQuote;