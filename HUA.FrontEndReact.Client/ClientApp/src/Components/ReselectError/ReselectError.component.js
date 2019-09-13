import React from 'react';
import { connect } from 'react-redux';
import ReselectErrorContainer from './ReselectError.container';
import { getPosts } from './ReselectError.actions';

class ReselectErrorSearch extends React.Component {
	constructor(props) {
		super(props);
		const { initPost } = this.props;
		initPost();
	}

	render() {
		const { store } = this.props;
		return <ReselectErrorContainer store={store} />;
	}
}

const mapStateToProps = (state) => {
	return {
		store: state.ReselectErrorStore,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		initPost: () => {
			dispatch(getPosts());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReselectErrorSearch);
