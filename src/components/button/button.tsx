import { Component, ReactElement } from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../enum';
import { IButtonProperties } from './button-interface';
import './button.sass';

export class Button extends Component<IButtonProperties> {
  private getClassName(name: string): string {
    return `button--${name}`;
  }

  public render(): ReactElement {
    const {
      color = ButtonColor.PRIMARY,
      size = ButtonSize.MEDIUM,
      variant = ButtonVariant.TEXT,
      fullWidth = false,
      endIcon,
      startIcon,
      children,
      className,
      ...restProperties
    } = this.props;

    const customClassName: string = [
      'button',
      this.getClassName(color),
      this.getClassName(size),
      this.getClassName(variant),
      fullWidth ? this.getClassName('full') : '',
      className,
    ].join(' ');

    return (
      <button className={customClassName} {...restProperties}>
        {startIcon} {children} {endIcon}
      </button>
    );
  }
}
