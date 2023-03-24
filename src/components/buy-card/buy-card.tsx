import { X } from "phosphor-react";
import { StyledInfoCard } from "."
import { Text } from '../text/text';
import { ReactNode } from 'react';

export const BuyCard = (props: { path: string, text: string }) => {
  return (
    <StyledInfoCard>
      <X cursor="pointer" className="close" size={32} weight="bold" />

      <div className="image-container">
        <img width={100} height={100} src={props.path} alt="a frontpage comic" />
      </div>

      <Text>{props.text}</Text>
    </StyledInfoCard>
  )
}