import React from 'react';
import styles from './Homepage.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <ViewTitle title='Homepage' />
      </div>
    );
  }
}

export default Homepage;
