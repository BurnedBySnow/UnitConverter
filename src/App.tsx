import convert from "convert-units";
import React, { useEffect, useState } from "react";
import "./App.css";
import ConvertionType from "./ConvertionType";
import Input from "./Input";
import SelectUnit from "./SelectUnit";
import { Unit } from "./UnitTypes";
import {
  Main,
  StyledTD,
  H2,
  LabelContainer,
  Card,
  SelectUnitContainer,
} from "./styles";

export type ConvertType =
  | "length"
  | "temp"
  | "area"
  | "volume"
  | "currency"
  | "weight";

function App() {
  const [convertedVal, setConvertedVal] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("0");
  const [activeType, setActiveType] = useState<ConvertType>("length");
  const [activeUnitLeft, setActiveUnitLeft] = useState<Unit>({
    label: "Meter",
    tag: "m",
  });
  const [activeUnitRight, setActiveUnitRight] = useState<Unit>({
    label: "Meter",
    tag: "m",
  });
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    if (isNaN(+inputValue)) setInputValue("0");
    console.log("guard");
    if (+inputValue === 0) {
      setConvertedVal(0);
    } else {
      setConvertedVal(
        +convert(+inputValue)
          .from(activeUnitLeft.tag)
          .to(activeUnitRight.tag)
          .toFixed(2)
      );
    }
  }, [activeUnitLeft.tag, activeUnitRight.tag, inputValue]);

  return (
    <div className="App">
      <Main>
        <ConvertionType activeType={activeType} setActiveType={setActiveType} />
        <Card>
          <H2>
            {activeType.charAt(0).toUpperCase() + activeType.slice(1)}{" "}
            Conversion
          </H2>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
          </div>
          <div style={{ position: "relative" }}>
            <LabelContainer>
              <StyledTD>From</StyledTD>
              <StyledTD>To</StyledTD>
            </LabelContainer>
            <SelectUnitContainer>
              <SelectUnit
                activeType={activeType}
                activeUnitLeft={activeUnitLeft}
                activeUnitRight={activeUnitRight}
                setActiveUnitLeft={setActiveUnitLeft}
                setActiveUnitRight={setActiveUnitRight}
                units={units}
                setUnits={setUnits}
              />
            </SelectUnitContainer>
            <div
              style={{
                display: "flex",
                marginTop: "70px",
                fontWeight: "bold",
                justifyContent: "center",
                fontSize: "25px",
                textOverflow: "hidden",
              }}
            >
              {+inputValue} {activeUnitLeft.tag} = {convertedVal}{" "}
              {activeUnitRight.tag}
            </div>
          </div>
        </Card>
      </Main>
    </div>
  );
}

export default App;

//Unit converter web app
