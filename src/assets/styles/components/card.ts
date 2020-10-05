import { makeStyles, Theme } from '@material-ui/core';

const cardStyle = makeStyles<Theme>((theme: Theme) => ({
  card: {
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 16px',
    borderRadius: '0px',
    backgroundColor: theme.palette.background.default,
    paddingTop: '35px'
  },
}));

export default cardStyle;
