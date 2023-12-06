import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary" | "danger" | "info";
  onClick: () => void;
}

const Button = ({ children, type = "info", onClick }: ButtonProps) => {
  return (
    <div>
      <button className={"btn btn-" + type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
