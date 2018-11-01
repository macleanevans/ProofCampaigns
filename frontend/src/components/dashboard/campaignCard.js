//React
import React, { Component } from 'react'
import PropTypes from 'prop-types';
//MUI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  card: {
    minWidth: 450,
    maxWidth: 550
  },
  media: {
    height: 140,
  },
};

class CampaignCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false, 
      anchorEl: null
    }
  }

  handleOpenPriorityList = (event) => {
    this.setState({
      showMenu: true, 
      anchorEl: event.currentTarget
    })
  }

  handleChoosePriority = (event, selectionValue) => {
    //Create a new Array of campaigns
    let newCampaignList = [...this.props.campaignList];
    const cardIndex = this.props.index;
    const element = newCampaignList[cardIndex];
    //Because we are starting with 1 and not 0
    const toIndex = (selectionValue - 1);
    newCampaignList.splice(cardIndex, 1);
    newCampaignList.splice(toIndex, 0, element);

    //Send new list to parent component to send the action
    this.props.updateUser(newCampaignList);

    //Close the menu
    this.setState({
      showMenu: false
    });
  }

  handleClosePriorityList = () => {
    this.setState({showMenu: false})
  }

  makeMenuList = () => {
    const listItems = this.props.campaignList.length;
    const menuItemArr = [];
    for(let i = 1; i <= listItems; i++){
      menuItemArr.push(
        <MenuItem
          key={i} 
          onClick={(event) => this.handleChoosePriority(event, i)} >
          {i}
        </MenuItem>
      )
    }
    return menuItemArr;
  }


  render() {
    const { classes, campaign, index, campaignList } = this.props;
    const { anchorEl, showMenu } = this.state;
    const imagePath = `/${campaign.imageName}`;
    const campaignName = campaign.name.charAt(0).toUpperCase() + campaign.name.slice(1);
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h4">
              {campaignName}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={imagePath}
            title={`${campaignName}`}
          />
          <CardContent>
            <Typography gutterBottom component="p">
              {`Priority: ${index + 1}`}
            </Typography>
            <Typography component="p">
              {`Description: ${campaign.description}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {campaignList.length > 1 ? 
            <Button size="small" color="primary" onClick={this.handleOpenPriorityList}>Change Priority</Button> : 
            null
          }
          <Menu
            id="priorityMenu"
            anchorEl={anchorEl}
            open={showMenu}
            onClose={this.handleClosePriorityList}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
          {this.makeMenuList()}
          </Menu>
        </CardActions>
      </Card>

      
    );
  }
}

CampaignCard.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.object, 
  index: PropTypes.number, 
  campaignList: PropTypes.array, 
  updateUser: PropTypes.func
};

export default withStyles(styles)(CampaignCard);