import React, { PropsWithChildren } from "react";
import styles from './Card.module.scss'

interface CardProps {
  height?: number;
  color?: 'blue' | 'red'
  className?: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ children, color, className, height }) => {

  return <div
    className={`${styles.card} ${styles[color]} ${className || ''}`}
    style={{ height: height && `${height}px` }}
  >{children}</div>
}

Card.defaultProps = {
  color: "blue",
}

export default Card;