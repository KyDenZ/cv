import { makeStyles, Theme } from '@material-ui/core';

export const technologiesStyle = makeStyles<Theme>(theme => ({
    title: {
        paddingLeft: '16px',
    },
    paper: {
        '-webkit-print-color-adjust': 'exact',
        backgroundColor: '#eee',
        padding: "10px"
    },
    container: {
        padding: "16px"
    },
    technology: {
        width: 'calc(16.66% - 6px)',
        margin: '3px'
    },
    item: {
        minWidth: "35px",
        maxWidth: "35px",
        color: "#fff",
        '& span, & svg': {
          fontSize: '0.9rem'
        },
      },
      listItem: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: "16px"
      },
      favoriteTechnologies: {
          width: '100%'
      },
      itemText: {
          paddingLeft: '16px'
      }
}));
