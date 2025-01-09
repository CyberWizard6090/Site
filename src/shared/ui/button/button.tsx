
import clsx from "clsx";

import "./button.scss";

type IButton = {
  readonly children: string | string[];
  readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  readonly theme?: "blue" | "transparent-grey" | "transparent-blue"| "mono";
  readonly disabled?: boolean;
  readonly className?: string;
  readonly onClick?: () => void | any;
};

export const Button = ({
  children,
  Icon,
  theme = "blue",
  disabled = false,
  className,
  onClick,
}: IButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "button",
        `button-theme__${theme}`,
        disabled && "button_disabled",
        className
      )}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};
