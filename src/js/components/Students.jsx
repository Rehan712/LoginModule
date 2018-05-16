import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isTokenValid } from '../utils';

class Students extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		if (isTokenValid()) {
			console.log('this token is valid');
			this.props.getData();
		} else {
			console.log('this token is not valid from students');
			this.props.history.push('/login');
		}
	}
	render() {
		console.log('this is data in students', this.props.data);
		return (
			<div className="students">
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

export default withRouter(
	connect(mapStateToProps, { getData: actions.getData })(Students)
);

Students.propTypes = {
	//getAction: PropTypes.func.isRequired
};
