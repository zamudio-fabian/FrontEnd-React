import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.count = 0;
	}

	render() {
		console.log(`Posts render ${++this.count}`);
		const { posts } = this.props;
		return (
			<div>
				<h3>Posts list </h3>
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

const getListing = createSelector(
	(state) => state.ReselectErrorStore.postsById,
	(state) => state.ReselectErrorStore.usersById,
	(state) => state.ReselectErrorStore.postListing,
	(posts, users, listing) =>
		listing.map((id) => {
			const post = posts[id];
			return { ...post, user: users[post.author] };
		})
);

const mapState = (state) => {
	return { posts: getListing(state) };
};

export default connect(mapState)(Posts);
