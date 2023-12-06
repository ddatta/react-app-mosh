import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  disabled: boolean;
  onDismiss: () => void;
}

const Alert = ({ children, disabled, onDismiss }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable" hidden={disabled}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      />
    </div>
  );
};

export default Alert;
