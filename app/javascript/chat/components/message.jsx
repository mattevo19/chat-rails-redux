import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className='message-container'>
        <i className='author'>
          <span>{this.props.message.author}</span>
        </i>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;