import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { primary } from "../styles/styles";

type Props = {};

const StyledH1 = styled.h1`
  font-size: 4rem;
  color: white;

  .fade-in-text {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 150px;
    color: white;
    animation: fadeIn linear 7s;
    -webkit-animation: fadeIn linear 7s;
    -moz-animation: fadeIn linear 7s;
    -o-animation: fadeIn linear 7s;
    -ms-animation: fadeIn linear 7s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TitlesPage: FunctionComponent<Props> = () => {
  return (
    <ContentContainer>
      <StyledH1>It's time to to your astrological home...</StyledH1>
    </ContentContainer>
  );
};
