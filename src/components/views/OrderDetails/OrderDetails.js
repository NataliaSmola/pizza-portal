import React from 'react';
import styles from './OrderDetails.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const OrderDetails = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Zamówienia
      </Typography>
    </Paper>
  );
};

export default OrderDetails;
