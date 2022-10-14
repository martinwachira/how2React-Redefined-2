import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_LIST = [
  { id: "q1", author: "wcr", text: "That`s a mistake" },
  { id: "q2", author: "writer", text: "This is fun" },
  { id: "q3", author: "author 1", text: "Soar great" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  console.log("match", match);
  const params = useParams();
  const quote = DUMMY_LIST.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Available Quote</p>;
  }
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
