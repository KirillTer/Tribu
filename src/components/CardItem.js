import React from 'react';
import { history } from "../store/configureStore";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    width: '20rem',
    textAlign: 'center',
    margin: '2rem'
  },
  media: {
    height: '20rem',
    width: '20rem',
  },
});

const CardItem = ({item}) => {
  const classes = useStyles();

  const cardToogle = (id) => {
    history.push(`/main/item/${id}`)
  }

  return (
    <Card className={classes.card} onClick={() => cardToogle(item.id)}>
      <CardActionArea>
        {console.log(item.url)}
        <CardMedia
          className={classes.media}
          image={item.download_url}
          title={item.author}
        />
      </CardActionArea>
    </Card>
  );
}

export default CardItem;