import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, title, children, closeOnOverlay = true }) {
  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) onClose?.();
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modal} onClick={stop}>
        {title && (
          <div className={styles.header}>
            <h4 className={styles.title}>{title}</h4>
            <button
              className={styles.close}
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  closeOnOverlay: PropTypes.bool,
};

export default Modal;
