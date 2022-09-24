import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <Route path={`/quotes/${params.quoteId}/commentId`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
