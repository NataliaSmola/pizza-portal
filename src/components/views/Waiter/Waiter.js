import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';


class Waiter extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} />
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} />
        <h2>Waiter view</h2>
      </div>
    );
  }
}

export default Waiter;
