import { Button, ButtonProps } from "reactstrap";
import { Color } from "../color";

export const BootPrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button 
      css={css`
          background-color: ${Color.PRIMARY};
          color: ${Color.WHITE};
      `}
    />
  )
}