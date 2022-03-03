import React from "react";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemo = this.loginDemo.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }
    handleInput(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
            .then(this.props.closeModal);
    }

    loginDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'demo@test.com',
            password: 'password'
        })
        this.props.action(demoUser)
            .then(this.props.closeModal);
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className="form-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={i} className="session-errors">
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        const signingUp = () => {
            if (this.props.formType === 'signup') {
                return (
                    <div>
                    <label><br />First Name<br />
                        <input
                            type="text"
                            value={this.state.fname}
                                onChange={this.handleInput('fname')} />
                    </label>
                    <br />
                    <label><br />Last Name<br />
                        <input
                            type="text"
                            value={this.state.lname}
                                onChange={this.handleInput('lname')} />
                    </label>
                    </div>

                );
            }
        };

        const loggingIn = () => {
            if (this.props.formType === 'login') {
                return (
                    <div>
                        <h3 className="line"><span>OR</span></h3>
                        <br /><br />
                        <button className="session-button" onClick={this.loginDemo}>Login as Demo User</button>
                    </div>
                )
            }
        };

        return (
            <div>
                <div className="login-form-container">
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className='session-form-box'>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <h2>Create your account</h2>
                        <h3>Registration is easy.</h3>
                        Please { this.props.formType } or { this.props.otherForm }
                        <br />
                        <label>Email Address
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
                        {signingUp()}
                        <br /><br />
                        <button className='session-button'>{this.props.formType}</button>
                        <br /><br />
                        {loggingIn()}
                        <br /><br />
                    </form>
                </div >
            </div >
        );
    }
}

export default SessionForm;