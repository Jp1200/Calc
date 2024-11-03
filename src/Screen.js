import "./Screen.css";
import { Textfit } from "react-textfit";

const Screen = ({ values }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};
