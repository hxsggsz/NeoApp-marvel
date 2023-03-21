import styled from 'styled-components';

type TextTypes = {
  size?: "md" | undefined
}

export const StyledText = styled.h1<TextTypes>`
  font-size: ${({ size }) => size === "md" ? "min(4.5vw, 2.4rem)" : "min(4.5vw, 3.2rem)" } ;
  font-weight: ${({ size }) => size === "md" ? 500 : 700 }
`;