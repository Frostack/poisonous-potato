import React from 'react';
import { connect } from 'react-redux';

import styles from './Header.module.css';
import { openModal, logoutUser } from '../../actions/index';
import logo from '../../assets/logo.png';

function Header({ user, openModal, logoutUser }) {
  const onLoginClick = () => {
    openModal('LOGIN');
  };

  const onSignUpClick = () => {
    openModal('SIGN_UP');
  };

  const onLogoutClick = () => {
    logoutUser();
  };

  const renderAuth = () => {
    return !user.isVerified ? (
      <>
        <h2 className={styles.authItem} onClick={onLoginClick}>
          Login
        </h2>
        <h2 className={styles.authItem} onClick={onSignUpClick}>
          Register
        </h2>
      </>
    ) : (
      <>
        <h2>{user.data.username}</h2>
        <h2 className={styles.authItem} onClick={onLogoutClick}>
          Logout
        </h2>
      </>
    );
  };

  return (
    <div className={styles.Header}>
      <h1>
        <span className={styles.green}>Poisonous</span>
        <img src={logo} alt="logo" />
        <span className={styles.yellow}>Potato</span>
      </h1>
      <div className={styles.auth}>{renderAuth()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { openModal, logoutUser })(Header);
