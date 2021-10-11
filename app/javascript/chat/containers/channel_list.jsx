import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMessages, selectChannel } from '../actions'

class ChannelList extends Component {

  // static getDerivedStateFromProps() should be used
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.getMessages(nextProps.selectedChannel);
    }
  }


  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  renderList = (channel) => {
    return(
      <li 
        className={channel == this.props.selectedChannel? 'active': null}
        // stops infinate loop??
        onClick={()=> this.handleClick(channel)} 
        role='presentation' 
        key={channel}>#{channel}
    </li>
    )
  }

  render() {
    return (
      <div className="channels-container">
        <span>REDUX CHAT</span>
        <ul>
          {/* removed to clean up */}
          {this.props.channels.map(this.renderList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel,
      getMessages: getMessages },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);