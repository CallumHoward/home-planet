import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { primary, secondary } from "../styles/styles";

type Props = {};

const ContentContainer = styled.div`
  height: 100%;
  margin: 0 25%;

  > * {
    margin-bottom: 2rem;
  }

  color: ${secondary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

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
  aspect-ratio: 1;
  margin: 2rem 1rem;
  padding: 0.25rem;
  box-sizing: content-box;

  border: 2px solid ${secondary};
  background: black;
  color: ${secondary};
`;

export const LandingPage: FunctionComponent<Props> = () => {
  return (
    <ContentContainer>
      <h1 style={{color: primary}}>HOME PLANET</h1>
      <p>FIND YOUR WAY HOME</p>
      <form>
        <StyledInput placeholder={"Age..."}></StyledInput>
        <StyledButton>{">"}</StyledButton>
      </form>
    </ContentContainer>
  );
};
