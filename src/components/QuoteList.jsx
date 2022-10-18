import Quote from "./Quote";

export default function QuoteList(props) {
  return (
    <ul>
      {props.quoteList.map((quote) => (
        <Quote quote={quote.quote} />
      ))}
    </ul>
  );
}
