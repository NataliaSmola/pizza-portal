import React from 'react';
import styles from './Kitchen.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Kitchen extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <ViewTitle title='Kitchen' />
      </div>
    );
  }
}

export default Kitchen;
