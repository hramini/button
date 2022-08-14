import { Button, createTheme, Theme, ThemeProvider } from '@mui/material';
import { blue, brown, green, purple, red, yellow } from '@mui/material/colors';
import { Component, ReactElement } from 'react';
import { ButtonSize } from '../../enum';
import { IMaterialButtonProperties } from './material-button-interface';

export class MaterialButton extends Component<IMaterialButtonProperties> {
  public render(): ReactElement {
    const theme: Theme = this.makeTheme();

    return (
      <ThemeProvider theme={theme}>
        <Button {...this.props} />
      </ThemeProvider>
    );
  }
  private makeTheme(): Theme {
    return createTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: blue[500],
        },
        special: {
          main: brown[500],
        },
        success: {
          main: green[500],
        },
        error: {
          main: red[500],
        },
        info: {
          main: blue[200],
        },
        warning: {
          main: yellow[800],
        },
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: {
                size: ButtonSize.SMALL,
              },
              style: {
                height: '20px',
                fontSize: '12px',
              },
            },
            {
              props: {
                size: ButtonSize.MEDIUM,
              },
              style: {
                height: '30px',
                fontSize: '14px',
              },
            },
            {
              props: {
                size: ButtonSize.LARGE,
              },
              style: {
                height: '40px',
                fontSize: '16px',
              },
            },
            {
              props: {
                size: ButtonSize.EXTRA_LARGE,
              },
              style: {
                height: '40px',
                fontSize: '20px',
              },
            },
          ],
          styleOverrides: {
            contained: {
              borderWidth: '2px',
              borderStyle: 'solid',
            },
            containedPrimary: {
              borderColor: purple[700],
            },
            containedSecondary: {
              borderColor: blue[700],
            },
            containedSpecial: {
              borderColor: brown[700],
            },
            containedSuccess: {
              borderColor: green[700],
            },
            containedError: {
              borderColor: red[700],
            },
            containedWarning: {
              borderColor: yellow[900],
            },
            containedInfo: {
              borderColor: blue[300],
            },
          },
        },
      },
    });
  }
}
