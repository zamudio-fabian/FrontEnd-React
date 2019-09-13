import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './Private.style.css';

class Exception extends React.Component {
	render() {
		return (
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<h3>Private Dashboard</h3>
				</Grid>
			</Grid>
		);
	}
}

export default Exception;
