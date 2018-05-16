import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends React.Component {
	constructor() {
		super();
	}
	render() {
		const {
			onEmailChange,
			onPasswordChange,
			inputData,
			submitData,
			resetState
		} = this.props;
		console.log('this is input data in Login Component', inputData);
		return (
			<div className="login">
				<div className="outerDiv">
					<div className="innerDiv">
						<h2>Login</h2>
						<div className="textEmail">
							<TextField
								required
								label="Name"
								margin="normal"
								type="text"
								onChange={e => {
									onEmailChange(e.target.value);
								}}
								style={{ width: 300 }}
								value={inputData.name}
							/>
						</div>
						<div className="textPassword">
							<TextField
								required
								type="text"
								label="Password"
								margin="normal"
								onChange={e => {
									onPasswordChange(e.target.value);
								}}
								value={inputData.password}
								style={{ width: 300 }}
							/>
						</div>
						<div className="textButton">
							<Button
								color="secondary"
								onClick={() => {
									submitData(inputData);
									resetState();
								}}
								style={{ width: 300, marginLeft: 20 }}
							>
								Login
							</Button>
							<div
								className="otherButton"
								style={{ marginTop: 10, marginBottom: 10 }}
							>
								<Button
									color="secondary"
									onClick={() => {
										submitData(inputData);
									}}
									style={{
										marginLeft: 10,
										width: 148,
										backgroundColor: 'red',
										color: 'white'
									}}
								>
									Login with Google
								</Button>
								<Button
									color="secondary"
									onClick={() => {
										submitData(inputData);
									}}
									style={{
										width: 148,
										marginLeft: 25,
										backgroundColor: 'blue',
										color: 'white'
									}}
								>
									Login with Facebook
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		inputData: state.inputData
	};
}

export default connect(mapStateToProps, {
	onEmailChange: actions.onEmailChange,
	onPasswordChange: actions.onPasswordChange,
	submitData: actions.submitData,
	resetState: actions.resetState
})(Login);

Login.propTypes = {
	//getAction: PropTypes.func.isRequired
};
