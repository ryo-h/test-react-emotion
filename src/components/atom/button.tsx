import { Color } from '../color';
import styled from "@emotion/styled";
import { BaseStyle } from "./base";

export const PrimaryButton = styled.button`
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  display: inline-block;
  padding: 6px 12px;
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
  ${BaseStyle};
`

export const SecondaryButton = styled(PrimaryButton)`
          background-color: ${Color.GRAY};
        `

export const DangerButton = styled(PrimaryButton)`
          background-color: ${Color.RED};
        `
