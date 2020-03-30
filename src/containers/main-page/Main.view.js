import React, { useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Waypoint } from 'react-waypoint'

import CardItem from '../../components/CardItem'

const useStyles = makeStyles({
  mainStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
});

const MainView = ({ loadMain, loadMore, mainData }) => {
  const classes = useStyles();
  let page = useRef(2);

  useEffect(() => {
    loadMain()
    page.current = page.current + 1;
  }, [loadMain, loadMore])

  return (
    <div className={classes.mainStyle}>
      {mainData && mainData.map((item, i) => {
        return (<div key={i}>
          <CardItem item={item} />
          {!((i+2) % 10) && i >= mainData.length-2 && <Waypoint onEnter={() => {loadMore(Math.ceil(mainData.length/10)+1)}} />}
        </div>)
      })}
    </div>
  );
};

export default MainView;
