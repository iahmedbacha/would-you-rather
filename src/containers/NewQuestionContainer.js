import React from 'react';
import { connect } from 'react-redux';

function NewQuestionContainer() {
  return <div>New Question</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestionContainer);
