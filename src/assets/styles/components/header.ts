import { makeStyles, Theme } from '@material-ui/core';

export const headerStyle = makeStyles<Theme>((theme) => ({
  paper: {
    '-webkit-print-color-adjust': 'exact',
    backgroundColor: '#333',
    background: '#333',
    zIndex: 10000,
  },
  grid: {
    marginBottom: '35px',
    flexGrow: 1,
  },
  item: {
    minWidth: '35px',
    color: '#fff',
    '& span, & svg': {
      fontSize: '0.9rem',
    },
  },
  padding: {
    padding: '12px',
  },
  listItem: {
    paddingTop: 3,
    paddingBottom: 3,
  },
}));
