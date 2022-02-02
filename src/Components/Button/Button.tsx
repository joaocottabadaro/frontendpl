import { memo } from "react";
import * as Styled from "./Button.styles";

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  backgroundColor: buttonBackgroundColor,
  color,
  width,
  height,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button
      variant="contained"
      size="large"
      buttonBackgroundColor={buttonBackgroundColor}
      buttonColor={color}
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

export default memo(Button);
