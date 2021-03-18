import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';




const kitchenDemo = [
  {type: 'take away', products: 'pizza, cola', table:'-', order: '123'},
  {type: 'stay in', products: '2x fries, 2x latte', table:'1', order: '124'},
  {type: 'take away', products: 'salad, fries, cake, water', table:'-', order: '125'},
  {type: 'stay in', products: '3x cake, 3x black coffee', table:'3', order: '126'},
  {type: 'stay in', products: 'pizza', table:'2', order: '127'},
];

const handleChange = (event) => {
  event.target.setAttribute('disabled', true);
};

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Zamówienia
      </Typography>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Typ zamówienia</TableCell>
            <TableCell align='center'>Produkty</TableCell>
            <TableCell align='center'>Numer stolika</TableCell>
            <TableCell align='center'>Numer zamówienia</TableCell>
            <TableCell align='center'>Oznacz jako zrobione</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kitchenDemo.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align='center' className={styles.dataTable}>
                {row.type}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {row.products}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {row.table}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell align='center' className={styles.dataTable}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Zrobione"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
