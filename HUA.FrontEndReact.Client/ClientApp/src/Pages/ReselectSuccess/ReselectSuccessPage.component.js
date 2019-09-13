import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import ReselectSuccess from '../../Components/ReselectSuccess';

class ReselectSuccessPage extends React.Component {
	render() {
		return (
			<Grid
				className="h100"
				container
				direction="row"
				justify="flex-start"
				alignItems="stretch">
				<Grid className="h100" item xs={12}>
					<ReselectSuccess />
				</Grid>
			</Grid>
		);
	}
}

export default ReselectSuccessPage;
