import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log("quoteData", quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
