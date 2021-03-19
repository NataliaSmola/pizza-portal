import React from 'react';
import styles from './EventBooked.module.scss';
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


const eventContent = [
  {id: '1', hour: '17:30', people: '2', duration:'2', phone:'123456789', email: 'lala@gmail.com'},
];

const EventBooked = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Event order {id} details
      </Typography>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Godzina</TableCell>
            <TableCell align='center'>Ilość osób</TableCell>
            <TableCell align='center'>Czas</TableCell>
            <TableCell align='center'>Telefon kontaktowy</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventContent.map(eventOrder => (
            <TableRow key={eventOrder.id}>
              <TableCell component="th" scope="row" className={styles.dataTable}>
                {eventOrder.hour}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {eventOrder.people}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {eventOrder.duration}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {eventOrder.phone}
              </TableCell>
              <TableCell className={styles.dataTable}>
                {eventOrder.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.button_box}>
        <Button
          className={styles.button}
          color="primary"
          variant="contained">Edytuj booking </Button>
        <Button
          className={styles.button}
          color="primary"
          variant="contained"
          component={NavLink} to={`${process.env.PUBLIC_URL}/tables`}>Powrót</Button>
      </div>
    </Paper>
  );
};

export default EventBooked;
