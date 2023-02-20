import React, {PropsWithChildren} from 'react';
import styles from './Button.module.scss';
import {isMobile} from "react-device-detect";

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'empty';
  color?: 'green' | 'red';
  hasCorner?: boolean;
  className?: string;
  uppercase?: boolean;
  width?: number;
  onClick?: () => void;
  isHovered?: boolean;
  isHoveredBackground?: boolean;
  component?: 'div' | 'a' | 'button';
  href?: string;
  disableAnimation?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {children, className, color, variant, hasCorner, uppercase, width, onClick, isHovered, component, isHoveredBackground, disableAnimation, ...rest} = props;

  const animation = isMobile && variant === 'contained' && !disableAnimation;

  const buttonStyles = `${styles.button} ${className || ''}
    ${uppercase ? styles.uppercase : ''}
    ${isHovered ? styles.hovered : ''}
    ${isHoveredBackground ? styles.hoveredBackground : ''}
    ${animation ? styles.animation : ''}
    ${styles[color]}
    ${styles[variant]}
    ${hasCorner ? styles.withCorner : ''}`;

  return React.createElement(component, {
    className: buttonStyles,
    style: {
      width: width && `${width}px`,
      cursor: component === "div" ? 'default' : "pointer",
    },
    onClick,
    children,
    ...rest
  });
};

Button.defaultProps = {
  variant: 'contained',
  color: 'green',
  uppercase: true,
  isHovered: true,
  isHoveredBackground: true,
  component: 'a',
};

export default Button;
