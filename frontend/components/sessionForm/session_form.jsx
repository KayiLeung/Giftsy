import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(type) {
        return e => this.setState({
            [type] : e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='session-form-box'>
                {this.props.action.formType} or {this.props.navLink}
                <label>Email:
                    <input
                     type="text"
                     value={this.state.email}
                     onChange={this.handleInput('email')}
                     id='email-input'
                     />
                </label>
                <br />
                <label>Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        id='password-input'
                    />
                </label>
                <br />
                <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm