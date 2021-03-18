import React, { useState } from 'react';
import styles from './Tables.module.scss';
import DateFnsUtils from '@date-io/date-fns';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const tableDemo = [
  {hour: '15:00',
    table: [
      {id:'1', status: 'booked'},
      {id:'2', status: 'free'},
      {id:'3', status: 'free'},
      {id:'4', status: 'booked'},
    ],
  },
  {hour: '15:30',
    table: [
      {id:'1', status: 'booked'},
      {id:'2', status: 'booked'},
      {id:'3', status: 'booked'},
      {id:'4', status: 'booked'},
    ],
  },
  {hour: '16:00',
    table: [
      {id:'1', status: 'event'},
      {id:'2', status: 'free'},
      {id:'3', status: 'free'},
      {id:'4', status: 'free'},
    ],
  },
  {hour: '16:30',
    table: [
      {id:'1', status: 'booked'},
      {id:'2', status: 'free'},
      {id:'3', status: 'booked'},
      {id:'4', status: 'event'},
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Add new booking</Button>
          <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`}>Add new event</Button>
        </>
      );
    case 'event':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/id`}>Event</Button>
      );
    case 'booked':
      return (
        <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/id`}>Booked</Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Sprawdź status stolika
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center">
          <KeyboardDatePicker
            className={styles.datePicker}
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Select date"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={date}
            onChange={setDate}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Godzina</TableCell>
            <TableCell align='center'> Stolik 1</TableCell>
            <TableCell align='center'>Stolik 2</TableCell>
            <TableCell align='center'>Stolik 3</TableCell>
            <TableCell align='center'>Stolik 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDemo.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className={styles.dataTable}>
                {row.hour}
              </TableCell>
              {row.table.map(table =>(
                <TableCell key={row.table} component="th" scope="row" className={styles.dataTable}>
                  {renderActions(table.status)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
