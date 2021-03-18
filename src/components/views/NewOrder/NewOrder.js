import React from 'react';
import styles from './NewOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const NewOrder = () => {
  const [people, setPeople] = React.useState('');
  const handleChangePeople = (event) => {
    setPeople(event.target.value);
  };

  const [table, setTable] = React.useState('');
  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const [amount, setAmount] = React.useState('');
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const names = [
    'extra cheese',
    'extra sauce',
    'basil',
    'ham',
    'mushrooms',
    'tuna',
    'pepperoni',
  ];

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };




  return (
    <Paper className={styles.component}>
      <Typography variant="h4" gutterBottom>
        Add new order
      </Typography>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Select  order details
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.section}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Guests</InputLabel>
          <Select
            native
            value={people}
            onChange={handleChangePeople}
            label="People"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={+9}>+9</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Table</InputLabel>
          <Select
            native
            value={table}
            onChange={handleChangeTable}
            label="Table"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="center">
        <Typography variant="h6" gutterBottom>
          Select Menu
        </Typography>
      </Grid>
      <Grid container justify="center" item xs={12} className={styles.section}>
        <FormControlLabel control={<Checkbox name="checkedC" color="primary"/>} label="Pizza" />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple" className={styles.input}>Amount</InputLabel>
          <Select
            native
            value={amount}
            onChange={handleChangeAmount}
            label="Amount"
            className={styles.input}
          >
            <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-mutiple-checkbox-label">Pizza extras</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </Grid>
      <Button
        className={styles.login_button}
        color="primary"
        variant="contained">Save</Button>
    </Paper>
  );
};

export default NewOrder;
