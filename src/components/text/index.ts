import styled from 'styled-components';

type TextTypes = {
  size?: "md" | "lg" | undefined
}

function customSize(size: string | undefined) {
  if(size === "lg") {
    return "min(6vw, 3.4rem)"
  }
  if(size === "md") {
    return "min(5.5vw, 3.2rem)"
  }
  return "min(6vw, 2.2rem)"
}

export const StyledText = styled.h1<TextTypes>`
  font-size: ${({ size }) => customSize(size) } ;
  font-weight: ${({ size }) => size === "md" ? 500 : 700 }
`;