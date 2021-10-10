import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { primary, secondary } from "../styles/styles";

const StyledInput = styled.input`
  width: 12rem;
  height: 2.5rem;
  margin: 2rem 1rem;
  padding: 0.5rem 1rem;

  border: 2px solid ${secondary};
  background: black;
  color: white;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  height: 2.5rem;
  width: 2.5rem;
  margin: 2rem 1rem;
  padding: 0.5rem;
  box-sizing: content-box;

  border: 2px solid ${secondary};
  background: black;
  color: ${secondary};
`;

const StyledH1 = styled.h1`
  font-size: 8rem;
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
      <StyledP><b>FIND YOUR WAY HOME</b></StyledP>
      <div>
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
