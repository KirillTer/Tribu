import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  card: {
    width: '40rem',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {

  },
  media: {
    height: '40rem',
    width: '40rem',
    dispaly: 'block'
  },
});


const ItemDescriptionView = ({ location, loadDetail, detailData }) => {
  const classes = useStyles();
  const id = /[^/]*$/.exec(location.pathname)[0]

  useEffect(() => {
    loadDetail(id);
  }, [loadDetail, id])

  return (
    <Card className={classes.card}>
        { detailData ?
        <><CardHeader
          className={classes.header}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={detailData.author}
          subheader={`Width - ${detailData.width};    Height - ${detailData.height}`}
        />
        <CardMedia
          className={classes.media}
          image={detailData.download_url}
          title={detailData.author}
        /></> : null}
    </Card>
  );
}

export default ItemDescriptionView
