import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  ContentContainer,
  StyledButton,
  StyledInput,
} from "../styles/page-styles";
import { primary } from "../styles/styles";

const StyledH1 = styled.h1`
  font-family: "xirodregular", Arial, sand-serif;
  font-weight: normal;
  font-style: normal;

  font-size: 8rem;
  letter-spacing: 0.5rem;
  color: ${primary};
`;

const StyledP = styled.p`
  font-size: 2rem;
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
      <StyledH1>HOME PLANET</StyledH1>
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
