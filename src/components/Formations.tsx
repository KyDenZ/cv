import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { formationsStyle } from 'assets/styles/components/formations';
import React from 'react';

export interface FormationsProps { }

export const Formations: React.FC<FormationsProps> = ({ children, ...rest }) => {
    const classes = formationsStyle();

    return (
        <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>Formations</Typography>
            {personalInfos.formations.map((formation, i) => (
                <ListItem className={classes.listItem} key={i}>
                    <ListItemText className={classes.item} primary={formation.title} secondary={formation.place}/>
                </ListItem>))}
        </div>
    );
};
