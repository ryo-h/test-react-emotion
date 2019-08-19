import React, { SFC } from "react";

import styled from "@emotion/styled";

import { Color } from "../color";
import { Base } from "./base";

type BaseTextBoxProps = {
  className?: string;
  maxLength: number;
}

const TextBox = (props: BaseTextBoxProps) => {
  return <input
    className={props.className}
    type="text"
    maxLength={props.maxLength}
  />
}

const BaseStyledTextBox = Base.withComponent(TextBox);

const StyledTextBox = styled(BaseStyledTextBox)`
  width: ${(props: BaseTextBoxProps) => { return `${props.maxLength}em` }};
`;

export const SmallTextBox = () => {
  return (
    <StyledTextBox maxLength={3}/>
  )
}

export const MediumTextBox = () => {
  return (
    <StyledTextBox maxLength={20} />
  )
}

export const LargeTextBox = () => {
  return (
    <StyledTextBox maxLength={50} />
  )
}
