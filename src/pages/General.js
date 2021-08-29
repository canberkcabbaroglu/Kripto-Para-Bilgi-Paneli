// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import { TotalPrice, Volume, Bitcoin, Etherium } from '../components/_dashboard/general';

// ----------------------------------------------------------------------

export default function General() {
  return (
    <Page>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography>
            <h1 className="coin-text">Genel Piyasa Durumu</h1>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <TotalPrice />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Volume />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Bitcoin />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Etherium />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
