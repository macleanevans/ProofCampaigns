//The login password for each of these is Test

const userData = [
    {
        "username": "user_1",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "43.217.98.114",
        "geo": "Austin",
        "industry": "Software",
        "companySize": "0-50"
    },
    {
        "username": "user_2",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "101.247.100.229",
        "geo": "San Francisco",
        "industry": "Software",
        "companySize": "100-200"
    },
    {
        "username": "user_3",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "201.112.124.140",
        "geo": "Denver",
        "industry": "Sports",
        "companySize": "0-50"
    },
    {
        "username": "user_4",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "253.231.118.198",
        "geo": "Dallas",
        "industry": "Sports",
        "companySize": "100-200"
    },
    {
        "username": "user_5",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "160.170.200.182",
        "geo": "New York",
        "industry": "Marketing",
        "companySize": "100-200"
    },
    {
        "username": "user_6",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "129.88.147.200",
        "geo": "San Francisco",
        "industry": "Retail",
        "companySize": "0-50"
    },
    {
        "username": "user_7",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "User ID": 7,
        "ip": "154.85.159.174",
        "geo": "Austin",
        "industry": "Oil and Gas",
        "companySize": "1000+"
    },
    {
        "username": "user_8",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "179.180.127.155",
        "geo": "Dallas",
        "industry": "Software",
        "companySize": "100-200"
    },
    {
        "username": "user_9",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "201.111.240.66",
        "geo": "San Antonio",
        "industry": "Tourism",
        "companySize": "0-50"
    },
    {
        "username": "user_10",
        "password": "$2b$10$sEPNJ2dhSwlDeLP4Ezw2JuXDNGcog7feeOtU9P4yV14iAJzDmi4zS",
        "ip": "79.210.84.134",
        "geo": "New York",
        "industry": "Sports",
        "companySize": "201-499"
    }
];

const campaignData = [
    {
        description: "Users from Austin",
        name: "Austin",
        imageName: "Austin.jpg", 
        rule: {
            type: "string",
            key: "geo", 
            match: "Austin"
        }
    }, 
    {
        description: "Users from SF",
        name: "SanFrancisco",
        imageName: "SanFrancisco.jpg", 
        rule: {
            type: "string",
            key: "geo", 
            match: "San Francisco"
        }
    }, 
    {
        description: "Users in Software",
        name: "Software",
        imageName: "Software.jpg", 
        rule: {
            type: "string",
            key: "industry", 
            match: "Software"
        }
    }, 
    {
        description: "Users in Sports",
        name: "Sports",
        imageName: "Sports.jpg", 
        rule: {
            type: "string",
            key: "industry", 
            match: "Sports"
        }
    }, 
    {
        description: "Users in Company Size 0 - 50",
        name: "proof",
        imageName: "proof.png", 
        rule: {
            type: "range",
            key: "companySize", 
            max: "50", 
            min: "0"
        }
    }, 
    {
        description: "Users in Company Size 100 - 200",
        name: "smb",
        imageName: "smb.jpg", 
        rule: {
            type: "range", 
            key: "companySize", 
            max: "200", 
            min: "100"
        }
    }, 
    {
        description: "Unknown Users",
        name: "shrug",
        imageName: "shrug.jpg", 
        rule: {}
    }
]

module.exports = {
    userData, 
    campaignData
};