import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { BiDetail } from 'react-icons/bi';
import { GrChannel } from 'react-icons/gr';



const Videos = (props) => {

	const useStyles = makeStyles((theme) => ({
		cardMedia: {
			paddingTop: '56.25%',
		},
		link: {
			margin: theme.spacing(1, 1.5),
		},
		cardHeader: {
			backgroundColor: "black",

		},
		videoTitle: {
			fontSize: '16px',
			textAlign: 'left',
		},
		videoText: {
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'baseline',
			fontSize: '12px',
			textAlign: 'left',
			marginBottom: theme.spacing(2),
		},
		cardContent: {
			justifyContent: 'center',
			display: "flex",
			flexDirection: "column",
		}
	}));

	const { videos } = props;
	const classes = useStyles();

	if (!videos || videos.length === 0) return <p></p>;
	return (
		<React.Fragment >
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end" >
					{videos.map((video) => {
						return (
							<Grid item key={video.id} xs={12} md={4} paddingTop="10%" >
								<Card className={classes.card}>
									<Link
										color="textPrimary"
										href={'video/' + video.videoId}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image={video.image}
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.videoTitle}
										>
											{video.title.substr(0, 20)}...
										</Typography>
										<div className={classes.videoText}>
											<Typography color="textSecondary">
												{video.description.substr(0, 20)}...
											</Typography>
										</div>
										<div className={classes.videoText}>
											<GrChannel />
											<Typography color="textSecondary" style={{ marginLeft: 10 + 'px' }}>
												{video.channelTitle.substr(0, 20)}
											</Typography>
										</div>
										<Link href={'video/' + video.videoId}>
											<Button variant="outlined">
												<BiDetail /> <div style={{ marginLeft: 10 + 'px' }}>More Detail...</div>
											</Button>
										</Link>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};


export default Videos;
