import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        console.log('======>',this.props,'<======');
        return (
            <div>
                Question
            </div>
        );
    };
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
    return {
        authedUser,
        user: users[questions[id].author].name,
        question: questions[id],
        answered: questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
    };
};

export default connect(mapStateToProps)(Question);
