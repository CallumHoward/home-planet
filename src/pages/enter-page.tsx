import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer, StyledButton } from "../styles/page-styles";

const StyledP = styled.p`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  font-family: forgottenfuturistregular, Arial, Helvetica, sans-serif;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

type Props = {
  onNext: () => void;
};

export const EnterPage: FunctionComponent<Props> = ({ onNext }) => {
  return (
    <ContentContainer style={{ justifyContent: "center" }}>
      <StyledP>Enter artwork</StyledP>
      <StyledButton onClick={onNext}>{">"}</StyledButton>
    </ContentContainer>
  );
};
