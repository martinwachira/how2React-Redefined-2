import QuoteList from "../components/quotes/QuoteList";
const DUMMY_LIST = [
  { id: "q1", author: "wcr", text: "That`s a mistake" },
  { id: "q2", author: "writer", text: "This is fun" },
  { id: "q3", author: "author 1", text: "Soar great" },
];
const AllQuotes = () => {
  return (
    <div>
      {/* <p>All Quotes Page</p> */}
      <QuoteList quotes={DUMMY_LIST} />
    </div>
  );
};

export default AllQuotes;
