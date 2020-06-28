import React from 'react';
import { connect } from 'react-redux';

import styles from './ChatItem.module.css';

function ChatItem({ data, username }) {
  const isOwner = data.owner === username;
  return (
    <div className={[styles.ChatItem, isOwner ? styles.self : null].join(' ')}>
      <div>{data.text}</div>
      <div className={styles.author}>{data.owner}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return { username: state?.user?.data?.username };
};

export default connect(mapStateToProps)(ChatItem);
