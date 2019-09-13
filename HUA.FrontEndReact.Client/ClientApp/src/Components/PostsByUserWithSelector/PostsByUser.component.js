import React from 'react';
import { createSelector } from 'reselect';
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

const makeGetPosts = () =>
	createSelector(
		(state, props) => props.user,
		(state) => state.ReselectErrorStore.postsById,
		(state) => state.ReselectErrorStore.usersById,
		(state) => state.ReselectErrorStore.postListing,
		(userId, posts, users, listing) =>
			listing
				.filter((id) => posts[id].author === userId)
				.map((id) => {
					const post = posts[id];
					return {
						...post,
						user: users[post.author],
					};
				})
	);

const mapState = () => {
	const getPosts = makeGetPosts();
	return (state, ownProps) => {
		return { posts: getPosts(state, ownProps) };
	};
};

export default connect(mapState)(Posts);
