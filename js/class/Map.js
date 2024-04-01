import  {allMaps}  from "../data/map.js";

// 地图的图片dom
var mapImgs = []

// 游戏区dom
var gameFrameDom = document.querySelector('#gameFrame')

var player,allGoods;

export function Map(p,allG) {
    player = p
    allGoods = allG

    this.startPos = allMaps[player.curFloor].startPos
    this.curMap = allMaps[player.curFloor].grids
    
}


// 显示地图
Map.prototype.view = function (upStair) {
    this.startPos = allMaps[player.curFloor].startPos
    if(upStair=='downStair'){
        this.startPos = allMaps[player.curFloor].endPos
    }
   
    this.curMap = allMaps[player.curFloor].grids

    
    gameFrameDom.innerHTML = ""
    mapImgs = []

    // 显示地图
    this.curMap.forEach(rows=>{
        let rowImg = []
        rows.forEach(item=>{
            let goods = allGoods[item]
            let img = document.createElement('img')
            img.className = "gameGrid"
            img.src = IMAGE_PATH + goods.img
            rowImg.push(img)
            gameFrameDom.appendChild(img)
        })
        mapImgs.push(rowImg)
  
    })
    // 显示玩家
    player.show(this.startPos,'down')
}

// 改变地图的网格元素
Map.prototype.change = function (pos,replaceGoods) {
   var goods = replaceGoods || allGoods[WAY_ID]
    this.curMap[pos[0]][pos[1]] = goods.id
    mapImgs[pos[0]][pos[1]].src = `${IMAGE_PATH}/${goods.img}`

}