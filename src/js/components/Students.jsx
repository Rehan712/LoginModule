import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isTokenValid } from '../utils';
import Button from 'material-ui/Button';

class Students extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { getData, history } = this.props;
		if (isTokenValid()) {
			getData();
		} else {
			history.push('/login');
		}
	}

	// This is for the withRouter and we take history from with router

	// componentDidMount() {
	// 	if (isTokenValid()) {
	// 		console.log('this token is valid');
	// 		this.props.getData();
	// 	} else {
	// 		console.log('this token is not valid from students');
	// 		this.props.history.push('/login');
	// 	}
	// }
	render() {
		console.log('these are the props in students', this.props);
		return (
			<div className="students">
				<div>
					<Button color="primary" onClick={this.props.signOut}>
						Signout
					</Button>
				</div>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Password</th>
						</tr>
					</thead>
					<tbody>
						{this.props.data.map(item => {
							return (
								<tr>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.password}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data.data
	};
}

// This is routing with react-router-redux

export default connect(mapStateToProps, {
	getData: actions.getData,
	signOut: actions.signOut
})(Students);

// This is push routing with the withRouter from react-router-dom

// export default withRouter(
// 	connect(mapStateToProps, { getData: actions.getData })(Students)
// );

Students.propTypes = {
	//getAction: PropTypes.func.isRequired
};
