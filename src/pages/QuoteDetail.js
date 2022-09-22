import { Route, Switch, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Switch>
      <p>Details page</p>
      {params.quoteId}
    </Switch>
  );
};

export default QuoteDetail;
