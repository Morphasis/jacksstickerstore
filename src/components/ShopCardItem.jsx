import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  card: {
    // maxWidth: 345,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    maxWidth: 350,
  },
  media: {
    width: 350,
    height: 350,
  },
};
function MediaCard(props) {
  const { classes } = props;

  function updateBasket(props) {
    props.updateBasket(props.productID, "1", props.productName);
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.displayImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.productName}
          </Typography>
          <Typography component="p">
            {props.productDescription}
          </Typography>
          <div>
            <FontAwesomeIcon icon="fa-instagram" /> <a href="https://instagram.com/jacksharville/">@jacksharville</a>.
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => updateBasket(props)}>
          Add to basket
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);