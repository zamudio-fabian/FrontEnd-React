import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './Home.scss';

class HomePage extends React.Component {
	render() {
		return (
			<Grid
				className="h100 background-image"
				container
				direction="row"
				justify="flex-start"
				alignItems="stretch">
				<Grid className="h100" item xs={12}>
					asdsd
				</Grid>
			</Grid>
		);
	}
}

export default HomePage;
