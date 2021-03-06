import React from "react";
import TextField from '@mui/material/TextField';

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

                    <li>{this.props.errors[19]}</li>
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
                            <TextField
                                required
                                id="filled-required"
                                label="Required"
                                defaultValue="Hello World"
                                variant="filled"
                                value={this.state.fname}
                                onChange={this.handleInput('fname')}
                            />
                    </label>
                    <br />
                    <label><br />Last Name<br />
   
                            <TextField
                                required
                                id="filled-required"
                                label="Required"
                                defaultValue="Hello World"
                                variant="filled"
                                value={this.state.lname}
                                onChange={this.handleInput('lname')}
                            />
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
            <div className='session-form-wrapper'>
                <div className="login-form-container">
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className='session-form-box'>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className='session-form-header'>
                            <h3>Create your account</h3>
                            <h3>Registration is easy.</h3>
                            <p>Please {this.props.formType} or {this.props.otherForm}</p>
                        </div>
                        <br />
                        <div className='text-field'>
                            <label><br />Email Address<br />
                            <TextField
                                required
                                id="filled-required"
                                label="Required"
                                defaultValue="Email"
                                variant="filled"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            </label>
                            <label><br />Password<br />
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                variant="filled"
                            />
                            </label>
                        </div>

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
