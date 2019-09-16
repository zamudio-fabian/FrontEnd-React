import loadable from '@loadable/component';
import React from 'react';
import Loading from '../Loading';

const LoadableComponent = (component) => {
	return loadable(component, {
		fallback: <Loading />,
	});
};

export default LoadableComponent;
