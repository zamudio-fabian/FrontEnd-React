import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AsideContainer from './Aside.container';
import SessionService from '../../services/SessionService';

const logout = (history) => {
	SessionService.logout(history);
};

class AsideComponent extends React.Component {
	render() {
		const { user, history } = this.props;
		return (
			<AsideContainer
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
	)(AsideComponent)
);
