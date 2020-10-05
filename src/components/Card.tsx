// @material-ui/core components
import { Card, CardProps } from '@material-ui/core';
import cardStyle from 'assets/styles/components/card';
import React from 'react';

export interface CustomCardProps extends CardProps { }

export const CustomCard = React.forwardRef<HTMLElement, CustomCardProps>(
  (
    {
      children,
      ...rest
    },
    ref,
  ) => {
    const classes = cardStyle();

    return (
      <Card {...rest} ref={ref} className={classes.card}>
        {children}
      </Card>
    );
  },
);
