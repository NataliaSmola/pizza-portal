import React from 'react';
import styles from './Login.module.scss';
import ViewTitle from '../../layout/ViewTitle/ViewTitle';

class Login extends React.Component {
  render() {
    const title = 'Login';
    return (
      <div className={styles.component}>
        <ViewTitle>{title}</ViewTitle>
      </div>
    );
  }
}

export default Login;
