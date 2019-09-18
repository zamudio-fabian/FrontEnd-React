import * as React from 'react';
import AppLayoutComponent from './AppLayout.component';

class AppLayoutContainer extends React.Component {
	render() {
		const {
			routes,
			// history,
			location: { pathname },
		} = this.props;
		return (
			<AppLayoutComponent
				collapsed
				routes={routes}
				pathname={pathname}
			/>
		);
	}
}

export default AppLayoutContainer;
