import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import ReselectError from '../../Components/ReselectError';

class ReselectErrorPage extends React.Component {
	render() {
		return (
			<Grid
				className="h100"
				container
				direction="row"
				justify="flex-start"
				alignItems="stretch">
				<Grid className="h100" item xs={12}>
					<ReselectError />
				</Grid>
			</Grid>
		);
	}
}

export default ReselectErrorPage;
