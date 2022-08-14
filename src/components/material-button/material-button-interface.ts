import { ButtonProps } from '@mui/material';
import { ReactElement } from 'react';
import { ButtonColor, ButtonSize, ButtonVariant } from '../../enum';

export interface IMaterialButtonProperties extends ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
}

declare module '@mui/material/styles' {
  interface Palette {
    special: Palette['primary'];
  }
  interface PaletteOptions {
    special: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    special: true;
  }
  interface ButtonPropsSizeOverrides {
    'extra-large': true;
  }

  interface ButtonClasses {
    containedSpecial: string;
  }
}
