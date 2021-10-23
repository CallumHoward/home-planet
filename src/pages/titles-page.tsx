import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { fadeInAndOut } from "../styles/styles";

const displayTime = 5;

const StyledH1 = styled.h1`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  text-transform: uppercase;
  display: inline-block;
  font-family: forgottenfuturistregular, Arial, Helvetica, sans-serif;
  letter-spacing: 0.5rem;

  opacity: 0%;
  animation: ${fadeInAndOut} ${displayTime}s ease-in-out;
`;

const titlesContent = [
  "Each year...",
  "Your spirit takes a journey...",
  "To another planet...",
];

type Props = {
  onNext: () => void;
};

export const TitlesPage: FunctionComponent<Props> = ({ onNext }) => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    if (currentTitle < titlesContent.length) {
      setTimeout(() => {
        setCurrentTitle(currentTitle + 1);
      }, displayTime * 1000);
    } else {
      onNext();
    }
  }, [currentTitle]);

  return (
    <ContentContainer style={{justifyContent: "center"}}>
      <StyledH1 key={currentTitle}>{titlesContent[currentTitle]}</StyledH1>
    </ContentContainer>
  );
};
