import styled from "styled-components";

export const Main = styled.div`
  height: 310px;
  width: 600px;
  margin-top: 20px;
  display: flex;
  background-image: linear-gradient(to bottom, #ffce00, #f7a800);
  box-shadow: 5px 5px rgba(0, 0, 0, 0.212);
  border-radius: 8px;
`;

export const StyledTD = styled.td`
  color: black;
  width: 100%;
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  text-align: left;
`;

export const ListItem = styled.li<{ active: boolean }>`
  color: black;
  display: flex;
  height: 100%;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.3s ease-in;
  background-color: ${(p) => (p.active ? "transparent" : "#e3a40d")};
  align-items: center;
  :hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  height: 100%;
  flex-direction: column;
  display: flex;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-align: left;
`;
export const Card = styled.table`
  width: 100%;
  position: relative;
`;

export const SelectUnitContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const CardSelect = styled.div<{ hover: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  font-size: larger;
  text-overflow: ellipsis;
  width: 110px;
  overflow-y: ${(p) => (p.hover ? "scroll" : "hidden")};
  max-height: ${(p) => (p.hover ? "290px" : "25px")};
  border: solid 2px #e3a40d;
  border-radius: 8px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.5);
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 5px;
    height: 15px;
    border: 1px solid black;
  }
`;

export const Option = styled.li`
  background-color: transparent;
  z-index: 1;
  position: relative;
  padding: 2px;
  list-style: none;
  cursor: default;
  display: flex;
  justify-content: center;
  transition: background-color 0.1s ease-in;
  :hover {
    ::before {
      content: "";
      left: 0;
      right: 0;
      transition: all 0.2s ease-in;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
    background-color: #e9e9e9;
    z-index: -1;
  }
`;

export const SwapIcon = styled.i`
  width: 35px;
  margin: 0 25px;
  display: block;
  transition: all 0.1s ease-in;
  :hover {
    cursor: pointer;
    fill: #555555;
    transform: scale(0.9);
  }
`;

export const StyledInput = styled.input`
  background-color: white;
  color: black;
  display: flex;
  padding: 12px 20px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* border-width: calc(var(--border-width) * 1px); */
  border: 2px solid #e3a40d;
  border-radius: 8px;
  text-align: center;
  outline: transparent;
  width: 70%;

  font-size: 20px;
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.5);
  :disabled {
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

export const TD = styled.td`
  width: 100%;

  display: flex;
  justify-content: center;
`;
