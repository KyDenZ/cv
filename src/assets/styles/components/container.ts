import { makeStyles, Theme } from '@material-ui/core';

export const containerStyle = makeStyles<Theme>({
  content: {
    width: '21cm',
    height: '29.7cm',
    margin: 'auto',
    marginTop: '2rem',
    '@media print': {
      marginTop: '0px',
    },
  },
});
