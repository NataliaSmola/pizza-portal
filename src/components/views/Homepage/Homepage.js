import React from 'react';
import styles from './Homepage.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Homepage extends React.Component {
  render() {
    const title = 'Homepage';
    return (
      <div className={styles.component}>
        <ViewTitle>{title}</ViewTitle>
      </div>
    );
  }
}

export default Homepage;
