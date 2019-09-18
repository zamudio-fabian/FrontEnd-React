import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderComponent from './Header.component';
import SessionService from '../../services/SessionService';

const logout = (history) => {
	SessionService.logout(history);
};

class HeaderContainer extends React.Component {
	render() {
		const { user, history } = this.props;
		return (
			<HeaderComponent
				user={user}
				logout={() => {
					logout(history);
				}}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.session.user,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HeaderContainer)
);
