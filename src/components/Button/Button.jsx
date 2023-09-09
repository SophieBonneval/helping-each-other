import classnames from 'classnames';
import classes from './Button.module.scss';

export function Button({ className, children, variant, disabled, ariaLabel }) {
  return (
    <button
      className={classnames(classes['button'], {
        button: true,
        [classes[`secondary`]]: variant === 'secondary',
        [className || '']: true,
      })}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
