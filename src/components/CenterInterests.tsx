import { Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { centerInterestsStyle } from 'assets/styles/components/centerInterests';
import React from 'react';

export interface CenterInterestsProps { }

export const CenterInterests: React.FC<CenterInterestsProps> = ({ children, ...rest }) => {
    const classes = centerInterestsStyle();

    return (
        <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>Centre d'intérêts</Typography>
            <List>
                {personalInfos.centerInterests.map((interest, i) => (
                    <ListItem className={classes.listItem} key={i}>
                        <ListItemIcon className={classes.item}>
                            <Icon className={interest.icon} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText className={classes.item} primary={interest.name} />
                    </ListItem>))}
            </List>
        </div>
    );
};
