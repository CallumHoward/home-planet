import styled from "styled-components";
import { secondary } from "./styles";

export const ContentContainer = styled.div`
  min-height: 100%;

  padding: 5rem 20%;
  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }

  > * {
    margin-bottom: 2rem;
  }

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledInput = styled.input`
  font-size: 1.5rem;
  width: 12rem;
  height: 2.5rem;
  margin: 2rem 1rem;
  padding: 0.5rem 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem;
  }

  border: 2px solid ${secondary};
  border-radius: 0;
  background: black;
  color: white;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  z-index: 15;
  font-size: 1.5rem;
  height: 2.5rem;
  width: 2.5rem;
  margin: 2rem 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem;
  }

  padding: 0.5rem;
  box-sizing: content-box;

  cursor: pointer;
  border: 2px solid ${secondary};
  background: black;
  color: ${secondary};
`;
