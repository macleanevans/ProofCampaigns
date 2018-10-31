// Imports
import React from 'react'
import PropTypes from 'prop-types'
import CampaignCard from './campaignCard';



function CampaignList ({campaigns}) {
  const emptyList = (
    <img src="/shrug.jpg"/>
  );

  //Function instead of a const so this doesnt have to run if we dont have any campaigns 
  const populateList = (campaigns, images) => {
    return campaigns.map(group =>{
      const path = `/${group.imageName}`;
      return (
        <div className="campaignCard">
          <CampaignCard campaign={group} />
        </div>
      )
    });
  }

  return (
    <div>
      {campaigns.length === 0 ? emptyList : populateList(campaigns)}
    </div>
  )
}

CampaignList.propTypes = {
  campaigns: PropTypes.array.isRequired
}

export default CampaignList
