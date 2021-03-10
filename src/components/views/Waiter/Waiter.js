import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Waiter extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} />
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} />
        <ViewTitle title='Waiter' />
      </div>
    );
  }
}

export default Waiter;
