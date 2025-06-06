import { FC } from 'react';
import clsx from 'clsx';

import './iconButton.scss';

interface IIconComponent {
  /** Icon component. */
  readonly Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  readonly isCounterVisible?: boolean;
  /** Counter theme for displaying the number of products. */
  readonly theme?: 'grey' | 'accent' | 'mono';
  /** Number of products. */
  readonly counterValue?: number;
  /** Event handler when the button is clicked. */
  readonly onClick?: (() => void) | ((event: React.MouseEvent<HTMLButtonElement>) => void);
  /** Additional styles. */
  readonly className?: string;
}

export const IconButton: FC<IIconComponent> = (props) => {
  const {
    Icon,

    theme = 'accent',

    onClick,
    className,
  } = props;

  return (
    <button
      type="button"
      className={clsx(`icon-button icon-button-theme__${theme}`, className)}
      onClick={onClick}
    >
      {/* {isCounterVisible && (
                <div
                    className={`icon-button__counter icon-button__counter_theme_${counterTheme}`}>
                    {counterValue}
                </div>
            )} */}
      <Icon className="icon-button__icon" />
    </button>
  );
};
