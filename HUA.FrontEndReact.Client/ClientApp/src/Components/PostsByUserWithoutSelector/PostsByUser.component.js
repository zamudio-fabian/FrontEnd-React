import React from 'react';
import { connect } from 'react-redux';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.count = 0;
	}

	render() {
		console.log(`PostsByUser render ${++this.count}`);
		const { posts, user } = this.props;
		return (
			<div>
				<h3>Posts by {user} </h3>
				<h5>(render nro: {this.count})</h5>
				<ul>
					{posts.map((x) => (
						<li key={x.id}>
							{`${x.title} - ${x.user.first} ${x.user.last}`}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapState = () => {
	return (state, ownProps) => {
		const { user } = ownProps;
		const posts = state.ReselectErrorStore.postsById;
		const users = state.ReselectErrorStore.usersById;
		const listing = state.ReselectErrorStore.postListing;
		return {
			posts: listing
				.filter((id) => posts[id].author === user)
				.map((id) => {
					const post = posts[id];
					return {
						...post,
						user: users[post.author],
					};
				}),
		};
	};
};

export default connect(mapState)(Posts);
