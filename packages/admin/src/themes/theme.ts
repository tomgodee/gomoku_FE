import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteColorOptions } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import { green, rose, blusSapphire, mintCream } from './colors';

const primary = {
  main: green,
  contrastText: mintCream,
};

const secondary = {
  main: blusSapphire,
  constrastText: mintCream,
};

const warning = {
  main: orange[500],
};

const error = {
  main: rose,
};

const theme = createMuiTheme({
  palette: {
    primary: primary as PaletteColorOptions,
    secondary: secondary as PaletteColorOptions,
    warning: warning as PaletteColorOptions,
    error: error as PaletteColorOptions,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  // typography: {
  //   fontSize: 10,
  //   htmlFontSize: 16,
  // },
});

export default theme;
