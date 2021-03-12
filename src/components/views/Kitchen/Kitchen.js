import React from 'react';
import styles from './Kitchen.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Kitchen extends React.Component {
  render() {
    const title = 'Kitchen';
    return (
      <div className={styles.component}>
        <ViewTitle>{title}</ViewTitle>
      </div>
    );
  }
}

export default Kitchen;
