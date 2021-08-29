import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import NewsCard from './NewsCard';

// ----------------------------------------------------------------------

NewsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default function NewsList({ data, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {data.map((information) => (
        <Grid key={information.id} item xs={12} sm={6} md={3}>
          <NewsCard information={information} />
        </Grid>
      ))}
    </Grid>
  );
}
