import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';
import { palette } from './palette';

export const theme: Theme = responsiveFontSizes(
  createMuiTheme({
    palette,
  }),
);
