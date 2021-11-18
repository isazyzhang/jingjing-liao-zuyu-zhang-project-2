import "./HumanSquare.css";

export default function HumanSquare(props) {
  const symbol = props.symbol;

  let backgroundColor = "blueColor";
  if (symbol === "X") {
    backgroundColor = "redColor";
  } else if (symbol === "✓") {
    backgroundColor = "greenColor";
  }

  return (
    <div id="square" class={backgroundColor}>
      <div id="symbol">{symbol}</div>
    </div>
  );
}
