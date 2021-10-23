import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { fadeInAndOut } from "../styles/styles";

const displayTime = 5;

const StyledH1 = styled.h1`
  font-size: 2rem;
  color: white;
  opacity: 0%;

  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
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
    <ContentContainer>
      <StyledH1 key={currentTitle}>{titlesContent[currentTitle]}</StyledH1>
    </ContentContainer>
  );
};
