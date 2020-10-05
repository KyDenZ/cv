import { Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { infosStyle } from 'assets/styles/components/infos';
import React from 'react';

export interface InfosProps { }

export const Infos: React.FC<InfosProps> = ({ children, ...rest }) => {
    const classes = infosStyle();

    return (
        <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>Informations</Typography>
            <List>
                {personalInfos.infos.map((info, i) => (
                    <ListItem className={classes.listItem} key={i}>
                        <ListItemIcon className={classes.item}>
                            <Icon className={info.icon} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText className={classes.item} primary={info.value} />
                    </ListItem>))}
            </List>
        </div>
    );
};
