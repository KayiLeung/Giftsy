import React from 'react';
import { Link } from 'react-router-dom';


class UserShowPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return (
            <div className='user-info'>
                <h1>{this.props.currentUser.fname}</h1>
            </div>
        )
    }
}

export default UserShowPage