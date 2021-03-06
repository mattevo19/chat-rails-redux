import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions'

class MessageForm extends Component {
  //used for controlled component https://reactjs.org/docs/forms.html
  constructor(props) {
    super(props);
    //set default value for the input
    this.state = {value: ''};
  }
  //used to change the default value
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSumbit = (event) => {
    //done so whole page isnt refreshed very time something is submitted
    event.preventDefault();
    this.props.createMessage(this.props.channelFromParams,this.state.value);
    // resets the value after being submitted
    this.setState({value: ''})
  }
   render() {
    return (
      <form onSubmit={this.handleSumbit} className="channel-editor">
        <input type="text" value={this.state.value} className='form-control' onChange={this.handleChange} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch)
}

export default connect(null, mapDispatchToProps)(MessageForm);