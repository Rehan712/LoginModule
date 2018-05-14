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
			submitData
		} = this.props;
		console.log('this is input data in Login Component', inputData);
		return (
			<div className="login">
				<div className="outerDiv">
					<div className="innerDiv">
						<div className="textEmail">
							<TextField
								required
								label="Name"
								margin="normal"
								type="text"
								onChange={e => {
									onEmailChange(e.target.value);
								}}
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
							/>
						</div>
						<div className="textEmail">
							<Button
								color="secondary"
								onClick={() => {
									submitData(inputData);
								}}
							>
								Login
							</Button>
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
	submitData: actions.submitData
})(Login);

Login.propTypes = {
	//getAction: PropTypes.func.isRequired
};
