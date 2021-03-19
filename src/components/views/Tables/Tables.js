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
      {id:'1', status: 'booked', order: 123},
      {id:'2', status: 'free', order: null},
      {id:'3', status: 'free', order: null},
      {id:'4', status: 'booked', order: 456},
    ],
  },
  {hour: '15:30',
    table: [
      {id:'5', status: 'booked', order: 789},
      {id:'6', status: 'booked', order: 159},
      {id:'7', status: 'booked', order: 654},
      {id:'8', status: 'booked', order: 951},
    ],
  },
  {hour: '16:00',
    table: [
      {id:'9', status: 'event', order: 485},
      {id:'10', status: 'free', order: null},
      {id:'11', status: 'free', order: null},
      {id:'12', status: 'free', order: null},
    ],
  },
  {hour: '16:30',
    table: [
      {id:'13', status: 'booked', order: 356},
      {id:'14', status: 'free', order: null},
      {id:'15', status: 'booked', order: 672},
      {id:'16 ', status: 'event', order: 598},
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
        <Button>Event</Button>
      );
    case 'booked':
      return (
        <Button>Booked</Button>
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
            <TableCell align='center'>Stolik 1</TableCell>
            <TableCell align='center'>Stolik 2</TableCell>
            <TableCell align='center'>Stolik 3</TableCell>
            <TableCell align='center'>Stolik 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDemo.map(tableInfo => (
            <TableRow key={tableInfo.id}>
              <TableCell component="th" scope="row" className={styles.dataTable}>
                {tableInfo.hour}
              </TableCell>
              {tableInfo.table.map(table =>(
                <TableCell key={tableInfo.table} component="th" scope="row" className={styles.dataTable}>
                  {table.status ==='booked'
                    ?
                    (<Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/${table.order}`}>
                      {renderActions(table.status)}</Button>)
                    :
                    (<Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/${table.order}`}>
                      {renderActions(table.status)}</Button>)}
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
