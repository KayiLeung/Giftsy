import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemo = this.loginDemo.bind(this)
    }
    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const currentUser = Object.assign({}, this.state);
        this.props.action(currentUser)
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    loginDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'demo@test.com',
            password: 'password'
        })
        this.props.action(demoUser);
    }

    render() {
        return (
            <div>
                <h2>Welcome to Giftsy</h2>
                
                <form onSubmit={this.handleSubmit} className='session-form-box'>
                    <label>Email address
                        <br />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            id='email-input'
                        />
                    </label>
                    <br />
                    <label>Password
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            id='password-input'
                        />
                    </label>
                    <br />

                    <input type="submit" value='Sign in' />
                    <br />
                    <button className='demoUser' onClick={this.loginDemo}>Login as Demo User</button>
                </form>
            </div>
        )
    }
}

export default LoginForm