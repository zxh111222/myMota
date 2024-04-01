import  scene  from "./data/scene.js";
import  treasure  from "./data/treasure.js";
import  npc  from "./data/npc.js";
import  monster  from "./data/monster.js";

import { PlayerObj } from "./class/Player.js";
import { listen } from "./listenAction.js";
import { Map } from "./class/Map.js";
import { TalkBox } from "./class/TalkBox.js";
import { FightBox } from './class/FightBox.js';


// 所有的物品
var allGoods = []

// 玩家
var player;

// 地图
var map;

// 对话框
var talkBox;

// 战斗框
var fightBox


// 游戏初始化
export function init() {

    // 初始化物品
    initGoods(scene,treasure,npc,monster)

    // 创建玩家对象
    player = new PlayerObj()
    
    // 创建地图对象
    map = new Map(player,allGoods)

    // 显示地图
    map.view()

    // 创建对话框对象
    talkBox = new TalkBox(player)

    // 创建对话框对象
    fightBox = new FightBox(player)


    // 监听操作
    listen(player,allGoods,map,talkBox,fightBox)
    
}


// 初始化所有物品函数
function initGoods(...arr) {
    arr.forEach(list=>{
        list.forEach(item=>{
            allGoods[item.id] = item
        })
    })    
}






