import React from 'react';
import styles from './OrderDetails.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const tableContent = [
  {id: '1', table: '1', order: 'pizza', amount: '2', extras: ['ham, mushrooms'], people:'2', price:'$30'},
];

const OrderDetails = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Order {id} details
      </Typography>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Table number</TableCell>
            <TableCell align='center'>Order</TableCell>
            <TableCell align='center'>Amount</TableCell>
            <TableCell align='center'>Extras</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Guests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableContent.map(order => (
            <TableRow key={order.id}>
              <TableCell component="th" scope="row" className={styles.dataTable}>
                {order.table}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {order.order}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {order.amount}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {order.extras}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {order.price}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {order.people}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.button_box}>
        <Button
          className={styles.button}
          color="primary"
          variant="contained"
          component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`}>Back</Button>
      </div>
    </Paper>
  );
};

export default OrderDetails;
