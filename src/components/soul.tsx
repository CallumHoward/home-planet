import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Flame = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  background: linear-gradient(-45deg, red, ${(p) => p.color});
  border-radius: 15px 15px 0px 15px;
  transform: rotate(-135deg);
  filter: blur(10px);
  position: relative;
  box-shadow: 17px 20px 90px #700;
  border: 45px solid black;
  border-left-width: 25px;
  border-top-width: 25px;

  &:after,
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    background: linear-gradient(-45deg, red, ${(p) => p.color});
    transform: scale(0.8) rotate(20deg);
    border-radius: 10px 10px 0px 10px;
    top: 20px;
  }
  &:before {
    top: 0;
    transform: scale(0.9) rotate(-15deg) translate(10px, 0px);
  }
`;

const getBackgroundColour = (input: string) => {
  const stringUniqueHash = [...input].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
};

type Props = {
  name: string;
};

export const Soul: FunctionComponent<Props> = ({ name }) => {
  return (
    <div>
      <Flame color={getBackgroundColour(name)} />
      <div style={{ position: "relative", zIndex: 20 }}>{name}</div>
    </div>
  );
};
