import React from 'react';
import Grid from '@material-ui/core/Grid';
import Highlight from 'react-highlight';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Posts from '../PostsWithSelector';
import PostsByUser from '../PostsByUserWithSelector';
import Counter from '../Counter';

const useStyles = makeStyles({
	greenAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: green[500],
	},
});

export default function GitHubRepositoryDescriptionContainer() {
	const classes = useStyles();
	return (
		<>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="center">
				<Grid item>
					<Avatar className={classes.greenAvatar}>
						<ThumbUpAltIcon />
					</Avatar>
				</Grid>
				<Grid item>
					<h1>Reselect Redux</h1>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={5}>
					Ejemplo de problemas con redux para
					calcular datos con propiedades
					provenientes de REDUX. Más información
					en: https://github.com/reduxjs/reselect
					<Box className="code-snippet-container">
						<Highlight language="javascript">
							{`const getListing = createSelector(
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

export default connect(mapState)(Posts);`}
						</Highlight>
					</Box>
				</Grid>
				<Grid item md={7}>
					<Grid container>
						<Grid item md={12}>
							<Counter />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item md={4}>
							<Posts />
						</Grid>
						<Grid item md={4}>
							<PostsByUser user="user-1" />
						</Grid>
						<Grid item md={4}>
							<PostsByUser user="user-2" />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
