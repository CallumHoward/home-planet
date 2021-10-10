import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { primary, secondary } from "../styles/styles";

const StyledInput = styled.input`
  width: 6rem;
  height: 1.5rem;
  margin: 2rem 1rem;
  padding: 0.25rem 0.5rem;

  border: 2px solid ${secondary};
  background: black;
  color: white;
`;

const StyledButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  margin: 2rem 1rem;
  padding: 0.25rem;
  box-sizing: content-box;

  border: 2px solid ${secondary};
  background: black;
  color: ${secondary};
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
      <h1 style={{ color: primary }}>HOME PLANET</h1>
      <p>FIND YOUR WAY HOME</p>
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
