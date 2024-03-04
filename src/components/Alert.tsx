import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export default function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible mb-4">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}
