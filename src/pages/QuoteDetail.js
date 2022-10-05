import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_LIST = [
  { id: "q1", author: "wcr", text: "That`s a mistake" },
  { id: "q2", author: "writer", text: "This is fun" },
  { id: "q3", author: "author 1", text: "Soar great" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_LIST.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Available Quote</p>;
  }
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/commentId`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;