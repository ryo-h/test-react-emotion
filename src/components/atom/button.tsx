import React, { SFC } from "react";

import styled from "@emotion/styled";

import { Color } from "../color";
import { Base } from "./base";

type BaseButtonProps = {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
  label: string;
}

const BaseButton: SFC<BaseButtonProps> = (props: BaseButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.label}
    </button>
  );
}

const BaseStyledButton = Base.withComponent(BaseButton);

export const PrimaryButton = styled(BaseStyledButton)`
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  opacity: ${(props: BaseButtonProps) => { return props.disabled ? 0.65 : 1 }};
  display: inline-block;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${Color.GRAY};
`;

export const DangerButton = styled(PrimaryButton)`
  background-color: ${Color.RED};
`;
