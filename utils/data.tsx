import { FA5Style } from "@expo/vector-icons/build/FontAwesome5"

export const onboardingArray = [
    {
        key: 1, 
        heading:"Yo Champ!",
        content:"Win cash completing bets in your favourite game and sport. Play solo or with your squad",
        img: require("../assets/images/Onboarding1.jpg"),
        progressArray: [
            {
                i: 1,
                active:true
            },
            {
                i: 2,
                active:false
            },
            {
                i: 3,
                active:false
            }
        ]
    }, {
        key: 2,
        heading:"You rock!",
        content:"Bet on yourself using your skill in games and sports against the best players in the world/ your region",
        img: require("../assets/images/Onboarding2.jpg"),
        progressArray: [
            {
                i: 1,
                active:false
            },
            {
                i: 2,
                active:true
            },
            {
                i: 3,
                active:false
            }
        ]
    },
    {
        key: 3,
        heading:"Gain Points!",
        content:"Refer friend to earn unique skillgap coins and other rewards",
        img: require("../assets/images/Onboarding3.jpg"),
        progressArray: [
            {
                i: 1,
                active:false
            },
            {
                i: 2,
                active:false
            },
            {
                i: 3,
                active:true
            }
        ]
    },
  
]




export const homeCategoryData = [{
    key: 1,
    img: require("../assets/images/betImage.png"),
    heading:"Sport",
    numOfBets: 2345,
    numOfUsers: 245,
 
},
{
    key: 2,
    img: require("../assets/images/betImage.png"),
    heading:"Board Games",
    numOfBets: 2345,
    numOfUsers: 245,
 
},
{
    key: 3,
    img: require("../assets/images/betImage.png"),
    heading:"Console Games",
    numOfBets: 2345,
    numOfUsers: 245,
 
},
{
    key: 4,
    img: require("../assets/images/betImage.png"),
    heading:"Sport",
    numOfBets: 2345,
    numOfUsers: 245,
 
}

]



export const homeLeaderData = [{
    key: 1,
    img: require("../assets/images/userProfile.png"),
   name:"@Agness",
   amount: 5000,
  active:true
 
},
{
    key: 2,
    img: require("../assets/images/userProfile.png"),
    name:"@Wisdom",
    amount: 9000,
    active: false 
},
{
    key: 3,
    img: require("../assets/images/userProfile.png"),
    name:"@Agness",
    amount: 5000,
    active: false
 
},
{
    key: 4,
    img: require("../assets/images/userProfile.png"),
    name:"@Agness",
    amount: 5000,
    active: true
},
{
    key: 5,
    img: require("../assets/images/userProfile.png"),
    name:"@Agness",
    amount: 5000,
    active: true
},
{
    key: 6,
    img: require("../assets/images/userProfile.png"),
    name:"@Agness",
    amount: 5000,
    active: true
},
{
    key: 7,
    img: require("../assets/images/userProfile.png"),
    name:"@Agness",
    amount: 5000,
    active: false
}

]





export const homeContestData = [{
    key: 1,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
},{
    key: 2,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"john",
    cont2Name:"Wisdom",
    heading:"Football tennis",
  active:true
 
},
{
    key: 3,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Sam",
    heading:"Table tennis",
  active:true
 
},
{
    key: 4,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"ifeanyi",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
},
{
    key: 5,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
},
{
    key: 6,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
}
,
{
    key: 7,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
}
,
{
    key: 8,
    content1Im: require("../assets/images/contest1.png"),
    content2Im: require("../assets/images/contest2.png"),
    cont1Name:"quipigs",
    cont2Name:"Wisdom",
    heading:"Table tennis",
  active:true
 
}

]



// active, amount, img, name, time, userName

export const gameData =  [{
    key: 1,
    img: require("../assets/images/contest1.png"),
    time:"1min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 200,
     active:true
 
},{
    key: 2,
    img: require("../assets/images/contest1.png"),
    name:"Luipigs",
    time:"1min",
    userName:"Wisdom",
    amount: 400,
     active:true
 
 
},
{
    key: 3,
    img: require("../assets/images/contest1.png"),
    time:"4min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 200,
     active:false
 
 
},
{
    key: 4,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 900,
     active:false
 
 
},
{
    key: 5,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 400,
     active:true
 
},
{
    key: 6,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 900,
     active:false
 
}
,
{
    key: 7,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 900,
     active:false
 
},
{
    key: 8,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 900,
     active:false
 
 
},
{
    key: 9,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 400,
     active:true
 
},
{
    key: 10,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigsx",
    userName:"Wisdom",
    amount: 900,
     active:false
 
}
,
{
    key: 11,
    img: require("../assets/images/contest1.png"),
    time:"12min",
    name:"quipigs",
    userName:"Wisdom",
    amount: 900,
     active:false
 
}


]


export const gameSliderData = [
    {
        img: require("../assets/images/slider1.png"),
        key: 1
    },
    {
        img: require("../assets/images/slider2.png"),
        key: 2
    },
    {
        img: require("../assets/images/slider1.png"),
        key: 3
    },
    {
        img: require("../assets/images/slider2.png"),
        key: 4
    }
]






export const gameMessageCompData =  [
    {
    key: 1,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
  
 
},{
    key: 2,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 3,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 4,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
 
},
{
    key: 5,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 6,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
}
,
{
    key: 7,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 8,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
 
},
{
    key: 9,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
  
 
},{
    key: 10,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 11,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 12,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
 
},
{
    key: 13,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 14,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
}
,
{
    key: 15,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
},
{
    key: 16,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
    activeBetNumber: 2
 
 
}
]





export const gameSearchModelResentData =  [
    {
    key: 1,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
 
},{
    key: 2,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,
  
 
},
{
    key: 3,
    img: require("../assets/images/betImage.png"),
    ballNumber: 3,

 
}

]




export const filterModalDataByHash = [
    [
        {
            id: 1,
            hash:"#Table Tennis"
        },
        {
            id: 2,
            hash:"#Basket ball"
        },
        {
            id: 3,
            hash:"#Mini Golf"
        },
        {
            id: 4,
            hash:"#Mini Golf"
        },
        
    ],
    [
        {
            id: 1,
            hash:"#Table Tennis"
        },
        {
            id: 2,
            hash:"#Basket ball"
        },
        {
            id: 3,
            hash:"#Mini Golf"
        },
        {
            id: 4,
            hash:"#Mini Golf"
        },
        
    ],
    [
        {
            id: 1,
            hash:"#Table Tennis"
        },
        {
            id: 2,
            hash:"#Basket ball"
        },
        {
            id: 3,
            hash:"#Mini Golf"
        },
        {
            id: 4,
            hash:"#Mini Golf"
        },
        
    ]
]


export const transactionHomeData = [
    {
        img: require("../assets/images/transferImage.png"),
        sendeOReceiver:" First bank Nigeria, Wisdom O..",
        amount: 300,
        imageDivBgColor:"bg-rose-100",
        transactionStatus: "Successfull",
        time:"Yesterday, 8:32 AM",
        transactionType:"transfer",
        id: 1
    },
    
    {
       
        img: require("../assets/images/withdrawImage.png"),
        sendeOReceiver:" First bank Nigeria, Wisdom O..",
        amount: 300,
        transactionStatus: "Failed",
        time:"Yesterday, 8:32 AM",
        transactionType:"deposit",
        imageDivBgColor:"bg-green-100",
        id: 2
    },
    {
       
        img: require("../assets/images/withdrawImage.png"),
        sendeOReceiver:" First bank Nigeria, Wisdom O..",
        amount: 300,
        transactionStatus: "Pending",
        time:"Yesterday, 8:32 AM",
        transactionType:"deposit",
        imageDivBgColor:"bg-green-100",
        id: 3
    },
    {
        img: require("../assets/images/depositImage.png"),
       
        sendeOReceiver:" First bank Nigeria, Wisdom O..",
        amount: 300,
        transactionStatus: "Pending",
        time:"Yesterday, 8:32 AM",
        transactionType:"withdraw",
        imageDivBgColor:"bg-indigo-100",
       
        id: 4
    },
    {
        img: require("../assets/images/depositImage.png"),
       
        sendeOReceiver:" First bank Nigeria, Wisdom O..",
        amount: 300,
        transactionStatus: "Failure",
        time:"Yesterday, 8:32 AM",
        transactionType:"withdraw",
        imageDivBgColor:"bg-indigo-100",
       
        id: 5
    },
    
    
    
]


export const transactionTypeListData = [
    {
        id: 1,
        text:"transfer",
        img:require("../assets/images/transfer.png"),
        active:true
    },
    {
    id: 2,
  text:"withdraw",
  img:require("../assets/images/withdraw.png"),
  active: false
},

{
    id: 3,
    text:"deposit",
    img:require("../assets/images/deposit.png"),
    active: false
}
]
