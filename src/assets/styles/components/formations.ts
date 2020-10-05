import { makeStyles, Theme } from '@material-ui/core';

export const formationsStyle = makeStyles<Theme>((theme) => ({
  title: {
    paddingLeft: '16px',
  },
  item: {
    minWidth: '35px',
    color: theme.palette.primary.main,
    '& span, & svg': {
      fontSize: '0.9rem',
    },
  },
  listItem: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  paper: {
    '-webkit-print-color-adjust': 'exact',
    backgroundColor: '#eee',
    padding: '10px',
  },
}));
