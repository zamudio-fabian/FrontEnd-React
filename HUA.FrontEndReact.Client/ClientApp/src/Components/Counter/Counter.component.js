import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.interval = null;
	}

	componentWillMount() {
		this.interval = setInterval(() => {
			const { increment, count, reset } = this.props;
			if (count / 2 >= 100) {
				reset();
			} else {
				increment();
			}
		}, 500);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		const { reset } = this.props;
		reset();
	}

	render() {
		const { count } = this.props;
		const progress = Math.min(Math.abs(count / 2), 100);
		return (
			<div>
				<h3>{progress.toFixed(1)}%</h3>
				<LinearProgress
					variant="determinate"
					value={progress}
				/>
			</div>
		);
	}
}

const mapState = (state) => ({ count: state.ReselectErrorStore.count });
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch({ type: 'INCREMENT' });
		},
		reset: () => {
			dispatch({ type: 'RESET_INCREMENT' });
		},
	};
};

export default connect(
	mapState,
	mapDispatchToProps
)(Counter);
