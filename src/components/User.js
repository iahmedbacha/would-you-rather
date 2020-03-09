import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div>
                User
            </div>
        );
    };
};

function mapStateToProps({users}, {id}) {
    return {
        user: users[id]
    };
};

export default connect(mapStateToProps)(User);
