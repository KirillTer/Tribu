import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProtectedRouter from "../../components/ProtectedRoute";
import Header from "./header/Header.connect";

import MainView from "../main-page/Main.connect";
import ItemDescription from "../item-description/ItemDescription.connect";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2rem',
    margin: '6rem auto',
    width: '90vw',
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
        <Paper className={classes.root} m={1}>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/main"/>
            )}/>
            <ProtectedRouter exact path="/main" component={MainView} />
            <ProtectedRouter path="/main/item" component={ItemDescription} />
          </Switch>
        </Paper>
    </>
  );
};

export default Layout;
