import { React, useState } from "react";
import { Button } from "./Button";
import { Screen } from "./Screen";
import { ButtonBox } from "./ButtonBox";
function Calculator() {
  const [output, setOutput] = useState("")

  const performOutput = () => {
    console.log("Yo")
  }
  return (
    <div className="calculator">
      <ButtonBox>
      </ButtonBox>

    </div>
  )
}
export default Calculator;
