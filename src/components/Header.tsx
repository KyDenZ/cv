import { Grid, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { headerStyle } from 'assets/styles/components/header';
import React from 'react';

export interface HeaderProps { }

export const Header: React.FC<HeaderProps> = ({ children, ...rest }) => {
    const classes = headerStyle();

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={1} className={classes.paper}>

            </Grid>
            <Grid item xs={8} className={classes.padding}>
                <Typography variant="h3">{personalInfos.name}</Typography>
                <Typography variant="subtitle1">Développeur Fullstack Freelance</Typography>
            </Grid>
            <Grid item xs={3} className={classes.paper}>
                
            </Grid>
        </Grid >
    );
};
