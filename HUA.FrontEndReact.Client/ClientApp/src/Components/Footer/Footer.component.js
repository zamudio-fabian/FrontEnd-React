import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.style.css';

const Footer = () => {
	return (
		<Grid className="footer">
			React © 2019{' '}
			<a href="https://es.reactjs.org/">Github Page</a>
		</Grid>
	);
};
export default Footer;
