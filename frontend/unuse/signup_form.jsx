import React from "react";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname:'',
            lname:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

    render() {
        return (
            <div>
                <h2>Create your account</h2>
                <h3>Registration is easy.</h3>
                Please {this.props.formType} or {this.props.otherForm}
                <form onSubmit={this.handleSubmit} className='session-form-box'>
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
                    <br />
                    <label>First name
                        <br />
                        <input
                            type="text"
                            value={this.state.fname}
                            onChange={this.handleInput('fname')}
                            id='fname-input'
                        />
                    </label>
                    <br />
                    <label>Last name
                        <br />
                        <input
                            type="text"
                            value={this.state.lname}
                            onChange={this.handleInput('lname')}
                            id='lname-input'
                        />
                    </label>
                    <br />
                    <input type="submit" value='Register' />
                </form>
            </div>
        )
    }
}

export default SignUpForm