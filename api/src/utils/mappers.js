module.exports = {
    checkRule
}

function checkRule(campaign, user, campignList){
    switch(campaign.rule.type){
        case "string": 
            return checkStringRule(campaign, user, campignList);
        case "range":
            return checkRangeRule(campaign, user, campignList);
        default: 
            return;
    }
}

function checkStringRule(campaign, user, campaignList){
    const ruleObject = campaign["rule"];
    const keyLookup = ruleObject["key"];
    if(user[keyLookup].toLowerCase() === ruleObject["match"].toLowerCase()){
        campaignList.push({
            name: campaign.name, 
            imageName: campaign.imageName, 
            description: campaign.description
        });
    }
    return campaignList;
}

function checkRangeRule(campaign, user, campaignList){
    const ruleObject = campaign["rule"];
    const keyLookup = ruleObject["key"];
    if(user.companySize.indexOf("-") > -1){
        const userMin = user.companySize.split("-")[0];
        const userMax = user.companySize.split("-")[1];
        if(userMax === ruleObject.max && userMin === ruleObject.min){
            campaignList.push({
                name: campaign.name,
                imageName: campaign.imageName, 
                description: campaign.description
            })
        }
    } else {
        //This is the case for 1000+
        if(campaign.rule.match === user.companySize) campaignList.push(campaign.name);
    }

    return campaignList;
}