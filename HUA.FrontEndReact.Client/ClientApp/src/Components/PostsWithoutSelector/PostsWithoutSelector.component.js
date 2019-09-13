import React from 'react';
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

const mapState = (state) => {
	const posts = state.ReselectErrorStore.postsById;
	const users = state.ReselectErrorStore.usersById;
	const listing = state.ReselectErrorStore.postListing;
	return {
		posts: listing.map((id) => {
			const post = posts[id];
			return { ...post, user: users[post.author] };
		}),
	};
};

export default connect(mapState)(Posts);
