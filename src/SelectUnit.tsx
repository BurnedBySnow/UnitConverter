import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ConvertType } from "./App";
import { Length, Temp, Area, Volume, Weight, Unit } from "./UnitTypes";
import { ReactComponent as SwapSvg } from "./SVG/swap.svg";
import { CardSelect, Option, SwapIcon } from "./styles";

interface Props {
  activeType: ConvertType;
  activeUnitLeft: Unit;
  activeUnitRight: Unit;
  units: Unit[];
  setActiveUnitLeft: Dispatch<SetStateAction<Unit>>;
  setActiveUnitRight: Dispatch<SetStateAction<Unit>>;
  setUnits: Dispatch<SetStateAction<Unit[]>>;
}

const SelectUnit = (props: Props) => {
  const [selectHoverLeft, setSelectHoverLeft] = useState<boolean>(false);
  const [selectHoverRight, setSelectHoverRight] = useState<boolean>(false);

  const {
    activeType,
    activeUnitLeft,
    activeUnitRight,
    units,
    setActiveUnitLeft,
    setActiveUnitRight,
    setUnits,
  } = props;

  useEffect(() => {
    if (units.length === 0) return;
    setActiveUnitLeft(units[0]);
    setActiveUnitRight(units[0]);
  }, [setActiveUnitLeft, setActiveUnitRight, units]);

  const toggleHoverLeft = () => {
    setSelectHoverLeft(!selectHoverLeft);
  };

  const toggleHoverRight = () => {
    setSelectHoverRight(!selectHoverRight);
  };

  const swapUnits = () => {
    let temp = activeUnitLeft;
    setActiveUnitLeft(activeUnitRight);
    setActiveUnitRight(temp);
  };

  useEffect(() => {
    switch (activeType) {
      case "length":
        setUnits(Length());
        break;
      case "temp":
        setUnits(Temp());
        break;
      case "area":
        setUnits(Area());
        break;
      case "volume":
        setUnits(Volume());
        break;
      case "weight":
        setUnits(Weight());
        break;
      default:
        setUnits(Length());
    }
  }, [activeType, props.activeType, setUnits]);

  return (
    <>
      <CardSelect
        hover={selectHoverLeft}
        onMouseEnter={toggleHoverLeft}
        onMouseLeave={toggleHoverLeft}
      >
        {selectHoverLeft ? (
          <>
            <Option>{activeUnitLeft.label}</Option>
            {units
              ?.filter((item) => item.label !== activeUnitLeft.label)
              .map((item) => (
                <Option
                  value={item.label}
                  onClick={() => {
                    setActiveUnitLeft(item);
                    // moveToFirst(units, item);
                    toggleHoverLeft();
                  }}
                >
                  {item.label}
                </Option>
              ))}
          </>
        ) : (
          <Option>{activeUnitLeft.tag}</Option>
        )}
      </CardSelect>
      <SwapIcon onClick={() => swapUnits()}>
        <SwapSvg />
      </SwapIcon>
      <CardSelect
        hover={selectHoverRight}
        onMouseEnter={toggleHoverRight}
        onMouseLeave={toggleHoverRight}
      >
        {selectHoverRight ? (
          <>
            <Option>{activeUnitRight.label}</Option>
            {units
              ?.filter((item) => item.label !== activeUnitRight.label)
              .map((item) => (
                <Option
                  value={item.label}
                  onClick={() => {
                    setActiveUnitRight(item);
                    // moveToFirst(units, item);
                    toggleHoverRight();
                  }}
                >
                  {item.label}
                </Option>
              ))}
          </>
        ) : (
          <Option>{activeUnitRight.tag}</Option>
        )}
      </CardSelect>
    </>
  );
};

export default SelectUnit;
