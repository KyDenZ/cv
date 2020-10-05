import { makeStyles, Theme } from '@material-ui/core';

export const jobStyle = makeStyles<Theme>((theme) => ({
  chip: {
    background: 'eee',
    marginRight: '5px',
    '-webkit-print-color-adjust': 'exact',
  },
  chips: {
    marginTop: '5px',
  },
}));
