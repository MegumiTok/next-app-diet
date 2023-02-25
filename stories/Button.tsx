import React, { useMemo } from "react";
// import styles from './button.module.css';

import classNames from "classnames";
interface ButtonProps {
  primary?: boolean;

  color?: string;

  size?: "small" | "medium" | "large";
  // size?: 'small' | 'large';

  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-20 py-5";
    }
    default: {
      return "px-8 py-3";
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-blue_300 hover:bg-blue_300/80"
    : "text-white bg-green hover:bg-green/80";

const BASE_BUTTON_CLASSES = "rounded-full font-bold cursor-pointer";

export const Button = ({
  primary = false,
  size = "medium",

  color,
  label,
  type,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);
  return (
    <button
      type={type}
      className={classNames(BASE_BUTTON_CLASSES, computedClasses)}
      style={{ backgroundColor: color }}
      {...props}
    >
      {label}
    </button>
  );
};
