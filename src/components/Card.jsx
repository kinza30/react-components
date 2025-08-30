import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ title, subtitle, children, footer }) {
  return (
    <div className={styles.card} role="group" aria-label={title || "Card"}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default Card;
