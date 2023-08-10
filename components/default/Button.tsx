import { FC } from "react";

interface ButtonProps {
  onClick?: any;
  title: string;
}

const Button: FC<ButtonProps> = ({ onClick, title }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
