

//定义玩家
export function PlayerObj() {
        // 人物dom
    let dom = document.createElement('img')
    dom.className = "player"
    this.playerDom =  dom
    
    // 图片
    this.upImg = `${IMAGE_PATH}/player/player_1.jpg`;
    this.downImg = `${IMAGE_PATH}/player/player_2.jpg`;
    this.leftImg = `${IMAGE_PATH}/player/player_3.jpg`;
    this.rightImg = `${IMAGE_PATH}/player/player_4.jpg`;

    // 属性
    this.level = 1
    this.name = '勇士'
    this.life = 1000
    this.attack = 100
    this.defense = 2
    this.gold = 0
    this.exp = 0
    this.yelloKey = 1
    this.blueKey = 1
    this.redKey = 1

    // 当前楼层
    this.curFloor = 0

    // 当前位置
    this.position = []

    //当前行动
    this.action = "move"

    // 当前对象
    this.curGoods=null

  }

//   玩家显示
  PlayerObj.prototype.show = function (pos,dir) {
    this.updatePageInfo()
    this.move(pos,dir,true)
    document.querySelector('#gameFrame').appendChild(this.playerDom)
    
  }


  
  //更新页面信息
  PlayerObj.prototype.updatePageInfo = function() {
    document.querySelector('#level span').innerText = this.level;
    document.querySelector('#life span').innerText = this.life;
    document.querySelector('#attack span').innerText = this.attack;
    document.querySelector('#defense span').innerText = this.defense;
    document.querySelector('#gold span').innerText = this.gold;
    document.querySelector('#exp span').innerText = this.exp;
    document.querySelector('#yelloKey span').innerText = this.yelloKey;
    document.querySelector('#blueKey span').innerText = this.blueKey;
    document.querySelector('#redKey span').innerText = this.redKey;
  };

//   玩家移动
  PlayerObj.prototype.move = function (pos,dir,canMove) {
    let playerDom = this.playerDom
    playerDom.src =  this[`${dir}Img`]
    if(canMove){
        this.position = pos
        playerDom.style.top = `${pos[0]* GRID_WIDTH }px`
        playerDom.style.left = `${pos[1]* GRID_HEIGHT }px`  
    }
  }

//   改变玩家属性
  PlayerObj.prototype.change = function (list) {
    list.forEach(item => {
        if(item.add) this[item.name] += item.value
        else this[item.name] -= item.value
    });

    this.updatePageInfo()
    
  }

