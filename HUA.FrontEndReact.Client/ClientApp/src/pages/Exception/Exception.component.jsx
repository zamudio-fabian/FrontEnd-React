import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Exception.style.scss';

class Exception extends React.Component {
	render() {
		const exception = [
			{
				errorCode: '404',
				errorImg: '/404.png',
				errorDescription:
					'Sorry, the page you visited does not exist',
			},
			{
				errorCode: '401',
				errorImg: '/401.png',
				errorDescription:
					'Sorry, you dont have access to this page',
			},
			{
				errorCode: '500',
				errorImg: '/500.png',
				errorDescription:
					'Sorry, the server is reporting an error',
			},
		];

		const { location } = this.props;
		const params = new URLSearchParams(location.search);
		const type = params.get('type');
		let error = exception.find((x) => x.errorCode === type);

		if (error == null) {
			[error] = exception;
		}

		return (
			<Grid
				container
				spacing={2}
				direction="column"
				justify="center"
				alignItems="center">
				<Grid item>
					<Avatar
						shape="square"
						className="errorAvatar"
						src={error.errorImg}
					/>
				</Grid>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
					item>
					<Grid item xs={12}>
						<h1 className="errorTitle">
							{error.errorCode}
						</h1>
					</Grid>
					<Grid item xs={12}>
						<h5 className="errorDescription">
							{' '}
							{error.errorDescription}
						</h5>
					</Grid>
					<Grid item xs={12}>
						<Button color="primary">
							<Link
								to={{
									pathname:
										'/home',
								}}>
								Back to Home
							</Link>
						</Button>
					</Grid>
				</Grid>
				<Grid />
			</Grid>
		);
	}
}

export default Exception;
