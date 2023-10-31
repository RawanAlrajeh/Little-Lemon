import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { ButtonTypes } from "../../services/ButtonTypes";
import {
  AiOutlineCheck,
  AiOutlineStop,
  AiOutlineWarning,
} from "react-icons/ai";

const Button = React.forwardRef(
  ({ children, variant, outline, rounded, Bsx, iconStyle, ...props }, ref) => {
    let buttonClassName = className(
      props.className,
      "flex justify-center items-center px-3 py-1.5 border my-2",
      {
        "rounded-md": rounded,
        "bg-white": outline,
      }
    );
    switch (variant) {
      case ButtonTypes.PRIMARY:
        buttonClassName +=
          " bg-yellow-color1 border-yellow-color1 text-[#000] rounded-md";
        break;
      case ButtonTypes.SECONDARY:
        buttonClassName +=
          " bg-secondary-base border-secondary-border text-white";
        break;
      case ButtonTypes.SUCCESS:
        buttonClassName +=
          " bg-success-base border-success-border text-success-text";
        break;
      case ButtonTypes.WARNING:
        buttonClassName +=
          " bg-warning-base border-warning-border text-warning-text";
        break;
      case ButtonTypes.DANGER:
        buttonClassName +=
          " bg-danger-base border-danger-border text-danger-text";
        break;
      default:
        break;
    }

    const hasIcon = [ButtonTypes.SUCCESS, ButtonTypes.DANGER, ButtonTypes.WARNING].includes(variant);

    return (
      <button {...props} className={buttonClassName} style={Bsx} ref={ref}>
        {variant === ButtonTypes.SUCCESS && (
          <AiOutlineCheck className="mr-2" style={iconStyle} />
        )}
        {variant === ButtonTypes.DANGER && (
          <AiOutlineStop className="mr-2" style={iconStyle} />
        )}
        {variant === ButtonTypes.WARNING && (
          <AiOutlineWarning className="mr-2" style={iconStyle} />
        )}
        {children}
        {hasIcon && <span className="mr-2" />} {/* Spacer for when an icon is present */}
      </button>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(ButtonTypes)).isRequired,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  iconStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Button;
