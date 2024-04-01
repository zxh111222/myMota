const IMG_PATH = 'npc'
const npc = [
    {
        id:601,
        name:'精灵',
        type:'npc',
        img:`${IMG_PATH}/601.jpg`,
        taskIndex:0,
        curTalkIndex:0,
        talkList:[
            "精灵：勇士你好！",
            "你：你是谁？",
            "精灵：我是这座塔的守护精灵，这里有几把钥匙，会对你有帮助的",
            "你：谢谢。",
            "精灵：祝愿你早日打败魔王，救出公主！！",
        ],
        endTalkList:["精灵：祝愿你早日打败魔王，救出公主！！"],
        award:[
            {name:'yelloKey',value:3,add:true},
            {name:'blueKey',value:1,add:true},
            {name:'redKey',value:1,add:true}
        ],
    },
    {
        id:602,
        name:'盗贼',
        type:'',
        img:`${IMG_PATH}/602.jpg`
    }
]




export default npc