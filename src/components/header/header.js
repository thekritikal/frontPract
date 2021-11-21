import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import "./headerStyle.css"
import { ImHome } from 'react-icons/im';

import Searching from '../search/searchBar';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	link: {
		marginLeft: 'auto',
	},
	toolbarTitle: {
		flexGrow: 0.5,
	},
}));

const Header = () => {
    const classes = useStyles();
    return(
        
        <React.Fragment>
			<AppBar
				position="fixed"
				color="default"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					>
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>	
						<ImHome style={{marginRight: "5px"}}/>
							Home
						</Link>
					</Typography>
					<div className="Searching__bar">
					<Searching />
					</div>
					<Button
						href="/favorite"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/favorite"
					>
						Favorite
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
    )
}

export default Header;