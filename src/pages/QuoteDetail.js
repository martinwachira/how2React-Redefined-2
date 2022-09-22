import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <p>Details page</p>
      {params.quoteId}
      <Route path={`/quotes/${params.quoteId}/commentId`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
