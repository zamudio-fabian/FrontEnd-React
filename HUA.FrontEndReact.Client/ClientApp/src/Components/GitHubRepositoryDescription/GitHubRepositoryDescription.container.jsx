import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Chip from '@material-ui/core/Chip';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import ReactMarkdown from 'react-markdown';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
	avatar: {
		margin: 10,
	},
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60,
	},
	chipPadding: {
		marginRight: 15,
	},
});

export default function GitHubRepositoryDescriptionContainer(props) {
	const classes = useStyles();
	const { repository, loading } = props;
	return (
		<>
			{repository.id !== undefined && (
				<Grid container spacing={2}>
					<Grid
						item
						md={12}
						container
						direction="row"
						justify="flex-start"
						alignItems="center">
						<Grid item>
							<Avatar
								alt="Remy Sharp"
								src={
									repository
										.owner
										.avatar_url
								}
								className={
									classes.bigAvatar
								}
							/>
						</Grid>
						<Grid item>
							<Grid item md={12}>
								<Typography
									variant="h5"
									gutterBottom>
									<Link
										target="_blank"
										rel="noreferrer"
										href={
											repository.html_url
										}>
										{
											repository.full_name
										}
									</Link>
								</Typography>
							</Grid>
							<Grid item md={12}>
								<Chip
									className={
										classes.chipPadding
									}
									variant="outlined"
									color="primary"
									size="small"
									icon={
										<StarBorder />
									}
									label={repository.stargazers_count.toLocaleString()}
								/>
								<Chip
									className={
										classes.chipPadding
									}
									variant="outlined"
									color="primary"
									size="small"
									icon={
										<ShareIcon />
									}
									label={repository.forks_count.toLocaleString()}
								/>
								<Chip
									className={
										classes.chipPadding
									}
									variant="outlined"
									color="primary"
									size="small"
									icon={
										<VisibilityIcon />
									}
									label={repository.subscribers_count.toLocaleString()}
								/>
								<Chip
									className={
										classes.chipPadding
									}
									variant="outlined"
									color="primary"
									size="small"
									icon={
										<ErrorOutlineIcon />
									}
									label={repository.open_issues_count.toLocaleString()}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={12}>
						<Typography component="div">
							<Box
								fontStyle="italic"
								m={1}>
								{
									repository.description
								}
							</Box>
						</Typography>
					</Grid>
					<Grid item md={12}>
						<ReactMarkdown
							source={
								repository.decodeContent
							}
						/>
					</Grid>
				</Grid>
			)}
			{repository.id === undefined && (
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					className="h100">
					<Grid item md={12}>
						{!loading && (
							<Typography
								variant="h4"
								align="center">
								Seleccione un
								repositorio de
								la lista
							</Typography>
						)}
						{loading && (
							<Grid className="text-center">
								<CircularProgress className="center-content" />
							</Grid>
						)}
					</Grid>
				</Grid>
			)}
		</>
	);
}
