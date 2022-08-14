import { ButtonHTMLAttributes, ReactElement } from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../enum';

export interface IButtonProperties
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
}
