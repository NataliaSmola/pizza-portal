import React from 'react';
import styles from './Login.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Login extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <ViewTitle title='Login' />
      </div>
    );
  }
}

export default Login;
