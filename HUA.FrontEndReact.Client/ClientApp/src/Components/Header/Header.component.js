import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderContainer from './Header.container';
import SessionService from '../../Services/SessionService';

const logout = (history) => {
	SessionService.logout(history);
};

class HeaderComponent extends React.Component {
	render() {
		const { user, history } = this.props;
		return (
			<HeaderContainer
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
	)(HeaderComponent)
);
