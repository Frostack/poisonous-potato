import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllMessages } from '../../actions';
import ChatItem from './ChatItem/ChatItem';
import styles from './ChatSection.module.css';

function ChatSection({ messages, fetchAllMessages }) {
  const bottomRef = useRef();

  useEffect(() => {
    fetchAllMessages();
  }, [fetchAllMessages]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const renderChats = () => {
    return messages.map(message => <ChatItem key={message._id} data={message} />);
  };

  return (
    <div className={styles.ChatSection}>
      <div className={styles.chats}>{renderChats()}</div>
      <div ref={bottomRef}></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages.data,
  };
};

export default connect(mapStateToProps, { fetchAllMessages })(ChatSection);
