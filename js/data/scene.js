const IMG_PATH = 'scene'
const scene = [
    {
        id:304,
        name:'黄色门',
        type:'door',
        img:`${IMG_PATH}/304.jpg`,
        needs:[
            {
                name:'yelloKey',
                value:1
            }]
    },
    {
        id:305,
        name:'蓝色门',
        type:'door',
        img:`${IMG_PATH}/305.jpg`,
        needs:[
            {
                name:'blueKey',
                value:1
            }]
    },
    {
        id:306,
        name:'红色门',
        type:'door',
        img:`${IMG_PATH}/306.jpg`,
        needs:[
            {
                name:'redKey',
                value:1
            }]
    },
    {
        id:501,
        name:'普通墙',
        type:'',
        img:`${IMG_PATH}/501.jpg`
    },
    {
        id:505,
        name:'熔岩墙',
        type:'',
        img:`${IMG_PATH}/505.jpg`
    },
    {
        id:506,
        name:'星星墙',
        type:'',
        img:`${IMG_PATH}/506.jpg`
    },
    {
        id:507,
        name:'上楼梯',
        type:'upStair',
        img:`${IMG_PATH}/507.jpg`
    },
    {
        id:508,
        name:'下楼梯',
        type:'downStair',
        img:`${IMG_PATH}/508.jpg`
    },
    {
        id:509,
        name:'路',
        type:'way',
        img:`${IMG_PATH}/509.jpg`
    }
]




export default scene