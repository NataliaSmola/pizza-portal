import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Tables extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} />
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} />
        <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} />
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} />
        <ViewTitle title='Tables' />
      </div>
    );
  }
}

export default Tables;
