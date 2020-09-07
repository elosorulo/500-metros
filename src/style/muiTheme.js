import { fontColor } from './color';
import {createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    palette: {
       primary: {
           main: fontColor
       }
    }
  }
);

export default muiTheme;
