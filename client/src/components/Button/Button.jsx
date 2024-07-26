import classnames from 'classnames';
import classes from './Button.module.scss';

function Button({
  className,
  children,
  variant,
  disabled,
  ariaLabel,
  onClick,
}) {
  return (
    <button
      className={classnames(classes['button'], {
        button: true,
        [classes[`secondary`]]: variant === 'secondary',
        [classes[`reset`]]: variant === 'reset',
        [className || '']: true,
      })}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
