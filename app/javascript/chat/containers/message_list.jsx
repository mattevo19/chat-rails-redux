import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMessages } from '../actions';
import Message from '../components/message'
import MessageForm from './message_form';

class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages(this.props.selectedChannel)
    // reduce time to make it more usable (1000) for 1 second
    // this.refresher = setInterval(this.getMessages, 10000);
  }

  //using ref={(list) => { this.list = list; }}
  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }
  //clearing interval when unmounted (not in use)
  componentWillUnmount() {
    clearInterval(this.refresher)
  }
  //avoid syntax error when doing interval
  getMessages = () => {
    this.props.getMessages(this.props.selectedChannel)
  }

  render() {
    return (
      <div className='channel-container'>
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map(message => <Message message={message} key={message.created_at}/>)}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    //can also just be { getMessages} es6
    { getMessages: getMessages },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageList);