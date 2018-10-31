// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import CampaignList from './list'
import AuthRedirect from '../user/auth-redirect'

class DashboardContainer extends Component {
  render () {
    return (
      <section>
        <h2 className="pageHeader">Campaigns</h2>
        <br/>
        <div className="Aligner">
          <CampaignList campaigns={this.props.user.campaigns} />
        </div>

        <AuthRedirect />
        
      </section>
    )
  }
}

DashboardContainer.propTypes = {
  user: PropTypes.shape({})
}

function dashState (state) {
  return {
    user: state.user.user
  }
}

export default connect(dashState, {})(DashboardContainer)
