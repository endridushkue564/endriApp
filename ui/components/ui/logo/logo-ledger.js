import React from "react";

function LogoLedger({
  width = "100%",
  color = "var(--color-text-default)",
  className,
  ariaLabel
}) {
  return (
    <svg
      width={width}
      fill={color}
      className={className}
      aria-label={ariaLabel}
      viewBox="0 0 2000.58 669.35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1711.35,627.2V489.34H1999L1748,489V627ZM1711,627V485H1958V334H2002l-4,-8Zm-5,-627v4z" />
    </svg>
  );
}

export default LogoLedger;
