import { Grid, ThemeProvider } from '@material-ui/core';
import { CenterInterests } from 'components/CenterInterests';
import { TimelineJob } from 'components/TimelineJob';
import React from 'react';
import './App.css';
import { CustomCard, CustomContainer, Formations, Header, Infos, Technologies } from './components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomContainer>
        <CustomCard>
          <Header />
          <Grid container>
            <Grid item xs={4}>
              <Infos />
              <Formations />
              <Technologies />
              <CenterInterests />
            </Grid>
            <Grid item xs={8}>
              <TimelineJob />
            </Grid>
          </Grid >
        </CustomCard>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default App;
