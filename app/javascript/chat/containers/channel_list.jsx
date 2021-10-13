import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getMessages } from '../actions'

class ChannelList extends Component {

  // static getDerivedStateFromProps() should be used
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.getMessages(nextProps.channelFromParams);
    }
  }



  renderList = (channel) => {
    return(
      <li 
        className={channel == this.props.channelFromParams? 'active': null}
        role='presentation' 
        key={channel}
        >
          <Link to={`/${channel}`}>
            #{channel}
          </Link>
    </li>
    )
  }

  render() {
    return (
      <div className="channels-container">
        <span>REDUX CHAT</span>
        <ul>
          {this.props.channels.map(this.renderList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(ChannelList);