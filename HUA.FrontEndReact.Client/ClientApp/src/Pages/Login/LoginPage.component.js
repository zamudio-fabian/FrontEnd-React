import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm';

class LoginPage extends React.Component {
	render() {
		const { user } = this.props;
		if (user.username !== undefined) {
			return <Redirect to="/" />;
		}
		return (
			<Grid
				className="h100"
				container
				direction="row"
				justify="flex-start"
				alignItems="stretch">
				<Grid className="h100" item xs={12}>
					<LoginForm />
				</Grid>
			</Grid>
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
	)(LoginPage)
);
