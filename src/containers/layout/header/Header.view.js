import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  white: {
    color: 'white',
  },
}));


const ItemDescriptionView = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link component={RouterLink} to="/main" className={classes.white}>
              Chat
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ItemDescriptionView