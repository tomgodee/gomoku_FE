// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
// import type {} from '@material-ui/lab/themeAugmentation';
import {
  PaletteColorOptions,
} from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import { green, rose, blusSapphire, mintCream } from './colors';

const primary = {
  main: blusSapphire,
  contrastText: mintCream,
};

const secondary = {
  main: green,
  constrastText: mintCream,
};

const warning = {
  main: orange[500],
};

const error = {
  main: rose,
};

// TODO: export default causes a parse error here ???
// Due to https://material-ui.com/components/about-the-lab/#typescript
// eslint-disable-next-line import/prefer-default-export
export const theme = createMuiTheme({
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
});
