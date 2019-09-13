import React from 'react';
import Grid from '@material-ui/core/Grid';
import Highlight from 'react-highlight';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Posts from '../PostsWithoutSelector';
import PostsByUser from '../PostsByUserWithoutSelector';
import Counter from '../Counter';

const useStyles = makeStyles({
	redAvatar: {
		margin: 10,
		color: '#fff',
		backgroundColor: red[600],
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
					<Avatar className={classes.redAvatar}>
						<ThumbDownAltIcon />
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
							{`const mapState = (state) => {
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
