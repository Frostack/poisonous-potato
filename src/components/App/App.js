import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { verifyUser, connectSocket } from '../../actions';
import styles from './App.module.css';
import Header from '../Header/Header';
import TopicList from '../TopicList/TopicList';
import ChatSection from '../ChatSection/ChatSection';
import InputSection from '../InputSection/InputSection';
import Modal from '../Modal/Modal';

function App({ verifyUser, connectSocket }) {
  useEffect(() => {
    verifyUser();
    connectSocket();
  }, [verifyUser, connectSocket]);

  return (
    <div className={styles.App}>
      <Header />
      <TopicList />
      <ChatSection />
      <InputSection />
      <Modal />
    </div>
  );
}

export default connect(null, { verifyUser, connectSocket })(App);
