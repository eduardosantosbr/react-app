import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  shape: {
    borderRadius: 0
  },
});

window['theme'] = theme;

export default theme;