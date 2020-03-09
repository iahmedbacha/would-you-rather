import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                User List
            </div>
        );
    };
};

function mapStateToProps({users}) {
    return {
        usersIds: Object.keys(users)
    };
};

export default connect(mapStateToProps)(UserList);
