import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  variant = "primary",
  children,
  height,
  borderRadius,
  py,
  px,
  ...props
}) => {
  const clssGroup = twMerge(
    variant == "primary" && "bg-[#495E57] border-[#58ABC821]",
    variant == "secondary" && "bg-[#FFF]"
  );

  return (
    <div
      className={`${clssGroup} ${className || ""}`}
      style={{
        height: height || "auto",
        maxWidth: "100%",
        padding: `${py || "8rem"} ${px || "11.0rem"}`,
        borderRadius: borderRadius || "5px",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
