// Imports
import React from 'react'
import PropTypes from 'prop-types'
import CampaignCard from './campaignCard';



function CampaignList({ campaigns, updateUser}) {
  const emptyList = (
    <img alt="shrug" src="/shrug.jpg"/>
  );

  //Function instead of a const so this doesnt have to run if we dont have any campaigns 
  const populateList = (campaigns) => {
    return campaigns.map((group, index) =>{
      return (
        <div className="campaignCard" key={group.name}>
          <CampaignCard 
            campaign={group}
            index={index}
            campaignList={campaigns}
            updateUser={updateUser} />
        </div>
      )
    });
  }

  return (
    <div>
      {campaigns && campaigns.length === 0 ? emptyList : populateList(campaigns)}
    </div>
  )
}

CampaignList.propTypes = {
  campaigns: PropTypes.array.isRequired, 
  updateUser: PropTypes.func
}

export default CampaignList
