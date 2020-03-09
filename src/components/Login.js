import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../redux/actions/authedUser';

class Login extends Component {
    login = (e, id) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(setAuthedUser(id));
    };
    
    render() {
        console.log(this.props);
        return (
            <div>
                Login
            </div>
        );
    };
};

function mapStateToProps({users}) {
    return {
        usersIds: Object.keys(users)
    };
};

export default connect(mapStateToProps)(Login);
