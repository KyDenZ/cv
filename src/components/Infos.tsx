import { Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { infosStyle } from 'assets/styles/components/infos';
import moment from 'moment';
import React from 'react';

export interface InfosProps {}

export const Infos: React.FC<InfosProps> = ({ children, ...rest }) => {
  const classes = infosStyle();

  const calculateAge = (date: string) => {
    const birthday = moment(date, 'dd/mm/YYYY');
    return moment().diff(birthday, 'years') + ' ans';
  };

  return (
    <div className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Informations
      </Typography>
      <List>
        {personalInfos.infos.map((info, i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemIcon className={classes.item}>
              <Icon className={info.icon} fontSize="small" />
            </ListItemIcon>
            <ListItemText
              className={classes.item}
              primary={info.name === 'birthday' ? calculateAge(info.value) : info.value}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
