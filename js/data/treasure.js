const IMG_PATH = 'treasure'
const treasure = [
    {
        id:301,
        name:'黄钥匙',
        type:'treasure',
        img:`${IMG_PATH}/301.jpg`,
        award:[{name:'yelloKey',value:1,add:true}],
      
        talk:"获得 1 把黄钥匙"
    },
    {
        id:302,
        name:'蓝钥匙',
        type:'treasure',
        img:`${IMG_PATH}/302.jpg`,
        award:[{name:'blueKey',value:1,add:true}],
        
        talk:"获得 1 把蓝钥匙"
    },
    {
        id:303,
        name:'红钥匙',
        type:'treasure',
        img:`${IMG_PATH}/303.jpg`,
        award:[{name:'redKey',value:1,add:true}],
        
        talk:"获得 1 把红钥匙"
    },

    {
        id:307,
        name:'蓝宝石',
        type:'treasure',
        img:`${IMG_PATH}/307.jpg`,
        award:[{name:'defense',value:2,add:true}],
        
        talk:"防御力增加 2 点"

    },
    {
        id:308,
        name:'红宝石',
        type:'treasure',
        img:`${IMG_PATH}/308.jpg`,
        award:[{name:'attack',value:2,add:true}],
        
        talk:"攻击力增加 2 点"
    },
    {
        id:309,
        name:'蓝血瓶',
        type:'treasure',
        img:`${IMG_PATH}/309.jpg`,
        award:[{name:'life',value:500,add:true}],
     
        talk:"生命增加 500 点"
    },
    {
        id:310,
        name:'红血瓶',
        type:'treasure',
        img:`${IMG_PATH}/310.jpg`,
        award:[{name:'life',value:200,add:true}],
      
        talk:"生命增加 300 点"
    },
    {
        id:311,
        name:'怪物手册',
        type:'treasure',
        img:`${IMG_PATH}/311.jpg`
    },
    {
        id:312,
        name:'绿宝石',
        type:'treasure',
        img:`${IMG_PATH}/312.jpg`,
        award:[
            {name:'attack',value:2,add:true},
            {name:'defense',value:2,add:true}
        ],
 
        talk: "攻击力增加 2 点，防御力增加 2 点"
        
    },
    
]




export default treasure