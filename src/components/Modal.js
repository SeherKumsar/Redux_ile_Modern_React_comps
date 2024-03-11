import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
        document.body.classList.add("overflow-hidden");
        // Add the overflow-hidden class to the body when the component is mounted
        return () => {
      document.body.classList.remove("overflow-hidden");
      // Remove the backdrop when the component is unmounted
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
