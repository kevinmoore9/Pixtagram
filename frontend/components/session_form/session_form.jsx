import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}


	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	handleGuest(e) {
		e.preventDefault();
		const user = { username: "guest", password: "password" };
		this.props.processForm({user});
	}


	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className="login-toggle-link">Sign up</Link>;
		} else {
			return <Link to="/login" className="login-toggle-link">Log in</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}



	render() {
    const toggleText = this.props.formType === "login"
      ? "Don't have an account?"
      : "Already have an account?";

    const submitText = this.props.formType === "login"
      ? "Log In"
      : "Sign Up";

    const guest = {user: {username: "kevinmoore", password: "password"}};


		return (
			<div className="login-form-container">
				<div className="login-form-box">

  				<form onSubmit={this.handleSubmit}>
              <h2>Instaclone</h2>
              <br/>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
              <br/>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
              <br/>
              <input type="submit" value={submitText} className="login-button"/>
              {this.renderErrors()}
              <br/><h3>OR</h3><br/>
          </form>
					<form onSubmit={this.handleGuest}>
						<input
							id="guest-login"
							type="submit"
							value="Log in as guest" />
					</form>
				</div>

					<div className="toggle-login-box">
						{toggleText} {this.navLink()}
					</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
