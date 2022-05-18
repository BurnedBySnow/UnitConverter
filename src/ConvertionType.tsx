import { Dispatch, SetStateAction } from "react";
import { ConvertType } from "./App";
import { ListItem, Ul, StyledDiv } from "./styles";

const ConvertionType = (props: {
  setActiveType: Dispatch<SetStateAction<ConvertType>>;
  activeType: ConvertType;
}) => {
  return (
    <StyledDiv>
      <Ul>
        <ListItem
          active={props.activeType === "length"}
          onClick={() => props.setActiveType("length")}
          style={{ borderRadius: "8px 0 0 0" }}
        >
          Length
        </ListItem>
        <ListItem
          active={props.activeType === "temp"}
          onClick={() => props.setActiveType("temp")}
        >
          Temperature
        </ListItem>
        <ListItem
          active={props.activeType === "area"}
          onClick={() => props.setActiveType("area")}
        >
          Area
        </ListItem>
        <ListItem
          active={props.activeType === "volume"}
          onClick={() => props.setActiveType("volume")}
        >
          Volume
        </ListItem>
        <ListItem
          active={props.activeType === "weight"}
          onClick={() => props.setActiveType("weight")}
          style={{ borderRadius: "0 0 0 8px" }}
        >
          Weight
        </ListItem>
      </Ul>
    </StyledDiv>
  );
};

export default ConvertionType;
