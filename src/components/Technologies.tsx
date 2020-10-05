import { Tooltip, Typography } from '@material-ui/core';
import { personalInfos } from 'assets/data/personalInfos';
import { technologiesStyle } from 'assets/styles/components/technologies';
import React from 'react';

export interface HeaderProps { }

export const Technologies: React.FC<HeaderProps> = ({ children, ...rest }) => {
    const classes = technologiesStyle();

    return (
        <div className={classes.paper}>
            <Typography variant="h5" className={classes.title}>Technologies</Typography>
            <div className={classes.container}>
                {/* <List>
                    {personalInfos.favoriteTechnologies.map((technology, iT) => (
                        <ListItem className={classes.listItem} key={iT}>
                            <ListItemIcon className={classes.item}>
                                <img src={technology.src} alt={technology.name} className={classes.favoriteTechnologies} />
                            </ListItemIcon>
                            <ListItemText className={classes.itemText} primary={technology.name} secondary={<LinearProgress variant="determinate" value={technology.value} />}></ListItemText>
                        </ListItem>))}
                </List> */}
                {personalInfos.technologies.map((technology, i) => (
                    <Tooltip title={technology.name} key={i}>
                        <img src={technology.src} alt={technology.name} className={classes.technology} />
                    </Tooltip>
                ))
                }
            </div>
        </div>
    );
};
