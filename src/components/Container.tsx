import { ContainerProps } from '@material-ui/core';
import { containerStyle } from 'assets/styles/components/container';
import React from 'react';

export interface CustomContainerProps extends ContainerProps { }

export const CustomContainer = React.forwardRef<HTMLElement, CustomContainerProps>(({ children, ...rest }, ref,) => {
    const classes = containerStyle();

    return (
        <main className={classes.content}>
            {children}
        </main>
    );
});
