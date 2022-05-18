import { Dispatch, SetStateAction } from "react";
import { StyledInput, TD } from "./styles";

interface Props {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const Input = (props: Props) => {
  const { inputValue, setInputValue } = props;

  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    console.log(e.target.value);
    if (value === "") value = "0";
    console.log(value);
    if (value.length > 1 && value.startsWith("0")) value = value.substring(1);
    console.log(value);
    if (isNaN(Number(value)) || value.indexOf(" ") >= 0) return;
    setInputValue(value);
  };

  return (
    <>
      <TD>
        <StyledInput
          // step="any"
          value={inputValue}
          onChange={checkInput}
        />
      </TD>
      {/* <TD>
        <StyledInput type="text" disabled={true} value={convertedVal} />
      </TD> */}
    </>
  );
};

export default Input;
