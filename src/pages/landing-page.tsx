import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  ContentContainer,
  StyledButton,
  StyledInput,
} from "../styles/page-styles";
import { neon2 } from "../styles/styles";

const StyledH1 = styled.h1`
  font-family: "xirodregular", Arial, sand-serif;
  font-weight: normal;
  font-style: normal;

  font-size: 8rem;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }

  letter-spacing: 0.5rem;
  color: #ffffff;

  animation: ${neon2} 5s ease-in-out infinite alternate;
  animation-play-state: paused;
`;

const StyledP = styled.p`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

type Props = {
  age: number | undefined;
  onChangeAge: (newAge: number) => void;
  onContinue: () => void;
};

export const LandingPage: FunctionComponent<Props> = ({
  age,
  onChangeAge,
  onContinue,
}) => {
  return (
    <ContentContainer>
      <StyledH1>
        HOME
        <br />
        PLANET
      </StyledH1>
      <StyledP>
        <b>FIND YOUR WAY HOME</b>
      </StyledP>
      <div>
        <StyledInput
          placeholder={"Name..."}
          // onChange={}
        ></StyledInput>
        <StyledInput
          placeholder={"Age..."}
          onChange={(e) => onChangeAge(parseInt(e.target.value))}
        ></StyledInput>
        <StyledButton
          onClick={() => {
            !!age && onContinue();
          }}
        >
          {">"}
        </StyledButton>
      </div>
    </ContentContainer>
  );
};
