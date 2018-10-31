import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 450,
    maxWidth: 550
  },
  media: {
    height: 140,
  },
};

function CampaignCard(props) {
  const { classes, campaign } = props;
  const imagePath = `/${campaign.imageName}`
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {campaign.name}
          </Typography>
          <Typography component="p">
           {campaign.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* TODO: Add an on click that displays a dropdown? lets them choose what rank the card should be placed in */}
        <Button size="small" color="primary">
          Change Priority
        </Button>
      </CardActions>
    </Card>
  );
}

CampaignCard.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.object
};

export default withStyles(styles)(CampaignCard);