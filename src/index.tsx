import { Component, ReactElement } from 'react';
import { render } from 'react-dom';
import { Button } from './components/button/button';
import { ButtonColor, ButtonSize, ButtonVariant } from './enum';
import { MaterialButton } from './components/material-button/material-button';
import DeleteIcon from '@mui/icons-material/Delete';

export class Root extends Component {
  public render(): ReactElement {
    return (
      <div>
        <Button
          endIcon={<DeleteIcon />}
          variant={ButtonVariant.CONTAINED}
          color={ButtonColor.INFO}
          size={ButtonSize.EXTRA_LARGE}
          fullWidth={true}
        >
          Hi everybody
        </Button>
        <MaterialButton
          startIcon={<DeleteIcon />}
          variant={ButtonVariant.CONTAINED}
          color={ButtonColor.SPECIAL}
          size={ButtonSize.SMALL}
          fullWidth={true}
        >
          Hello
        </MaterialButton>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
