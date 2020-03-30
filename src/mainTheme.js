import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: { light: blue[300], main: blue[500], dark: blue[700] },
        secondary: { light: red[300], main: red[500], dark: red[700] },
    },
});

export default theme;