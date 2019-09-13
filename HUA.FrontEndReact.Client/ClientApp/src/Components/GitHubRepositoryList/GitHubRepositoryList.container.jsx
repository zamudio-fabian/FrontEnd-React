import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

export default function GitHubRepositoryListContainer(props) {
	const { repositories, click } = props;
	return (
		<Grid container className="h100">
			{repositories && repositories.length !== 0 && (
				<List className="w100">
					{repositories.map((repo) => {
						return (
							<ListItem
								onClick={() =>
									click(
										repo.url
									)
								}
								className="pointer"
								divider
								key={repo.id}>
								<ListItemAvatar>
									<Avatar>
										<WorkIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={
										repo.name
									}
								/>
								<ListItemSecondaryAction edge="end">
									<>
										<Chip
											variant="outlined"
											color="primary"
											size="small"
											icon={
												<StarBorder />
											}
											label={repo.stargazers_count.toLocaleString()}
										/>
									</>
								</ListItemSecondaryAction>
							</ListItem>
						);
					})}
				</List>
			)}
			{repositories && repositories.length === 0 && (
				<CircularProgress className="center-content" />
			)}
		</Grid>
	);
}
