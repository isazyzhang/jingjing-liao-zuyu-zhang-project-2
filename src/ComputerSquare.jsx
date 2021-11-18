import "./ComputerSquare.css";
import { useDispatch } from "react-redux";

export default function ComputerSquare(props) {
  const symbol = props.symbol;

  let backgroundColor = "blueColor";
  if (symbol === "X") {
    backgroundColor = "redColor";
  } else if (symbol === "⚫") {
    backgroundColor = "dotColor";
  }

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch({
          type: "HumanClickSquare",
          x: props.x,
          y: props.y,
        });
        setTimeout(() => {
          dispatch({
            type: "HumanChangeTurn",
          });
        }, 2000);
      }}
      id="square"
      class={backgroundColor}
    >
      <div id="symbol">{symbol}</div>
    </div>
  );
}
