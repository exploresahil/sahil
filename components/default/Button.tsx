import { FC } from "react";

interface ButtonProps {
  onClick?: any;
  title: string;
  type?: any;
}

const Button: FC<ButtonProps> = ({ onClick, title, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
