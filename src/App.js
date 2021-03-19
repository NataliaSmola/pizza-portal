import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Waiter from '../src/components/views/Waiter/Waiter';

import NewOrder from '../src/components/views/NewOrder/NewOrder';
import OrderDetails from '../src/components/views/OrderDetails/OrderDetails';
import TableBooked from '../src/components/views/TableBooked/TableBooked';
import NewTable from '../src/components/views/NewTable/NewTable';
import EventBooked from '../src/components/views/EventBooked/EventBooked';
import NewEvent from '../src/components/views/NewEvent/NewEvent';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
  },
});

class App extends React.Component {
  render(){
    return (
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderDetails} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TableBooked} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewTable} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventBooked} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    );
  }
}
export default App;
