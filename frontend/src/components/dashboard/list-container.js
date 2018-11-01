// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import CampaignList from './list'
import { Redirect } from 'react-router-dom'
import { updateUserCampaignListOrder } from '../../actions/user';

class DashboardContainer extends Component {
  constructor() {
    super()
  }

  updateUser = (newCampaignList) =>{
    //Kick off the action to change the priority list
    this.props.updateUserCampaignListOrder(this.props.user.user, newCampaignList);
  }

  render () {
    const {
      user, 
      updateUser
    } = this.props;

    const userObject = user.user;

    //Could put this in the router
    if(!user.isAuthenticated){
      return (<Redirect to="/login" />);
    } 

    return (
      <section>
        <h2 className="pageHeader">Campaigns</h2>
        <br/>
          <div className="Aligner">
            <CampaignList campaigns={userObject.campaigns} updateUser={this.updateUser} />
          </div>

      </section>
    )
  }
}

DashboardContainer.propTypes = {
  user: PropTypes.shape({})
}

function dashState (state) {
  return {
    user: state.user
  }
}

export default connect(dashState, {updateUserCampaignListOrder})(DashboardContainer)
