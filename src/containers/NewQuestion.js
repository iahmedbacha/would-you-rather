import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    return <div>New Question</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
