var player = null
var allGoods = null
var map;
var talkBox;
var fightBox

// 监听事件
export function listen(p,g,m,t,f) {
    player = p
    allGoods = g
    map = m
    talkBox  = t
    fightBox = f
    document.addEventListener('keydown',action)
}


function action(e) {
    let keyName = e.code

    
    switch (keyName) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            if(player.action == 'move'){
                let dir = keyName.replace('Arrow',"").toLowerCase()
                move(dir)
            }
          
            break;
        case 'Space':
            if(player.action == 'talk'){
                let curGoods = player.curGoods

                // 判断当前对象是否有为npc，npc有多段对话
                if(curGoods.type == 'npc'){
                    curGoods.curTalkIndex ++

                    // 如果对话已经结束
                    // 判断是否有领过奖励，
                    if(curGoods.curTalkIndex>=curGoods.talkList.length){
                        if(curGoods.taskIndex <=0){
                            let award = curGoods.award
                            let action =  player.change.bind(player,award)
                            curGoods.taskIndex ++
                            talkBox.close(action)
                        }else{
                            talkBox.close()
                        }
                       
                    }else{
                        talkBox.show(curGoods.talkList[curGoods.curTalkIndex])
                    }
                }else{
                    talkBox.close()
                }
             
                
            }  
            if(player.action == 'fight'){
                fightBox.close()
            }  
        default:
            break;
    }
}

// 玩家移动
function move(dir) {
    let pos = player.position;
    let nextPos = [...pos]
    if(dir=='up' && nextPos[0]>0 ) nextPos[0]--
    if(dir=='down' && nextPos[0]<10) nextPos[0]++
    if(dir=='left' && nextPos[1]>0) nextPos[1]--
    if(dir=='right' && nextPos[1]<10) nextPos[1]++

    let canMove = canMoveHandle(nextPos)
    
    player.move(nextPos,dir,canMove)
    
}

// 判断是否可以移动函数
 function canMoveHandle(pos) {
    
    let goodsId =  map.curMap[pos[0]][pos[1]]
    let goods = allGoods[goodsId]

    player.curGoods = goods

    // 道路
    if(goods.type == 'way'){
        return true
    }

     // 门
     if(goods.type == 'door'){
        let needs = goods.needs
        let need = true
        needs.forEach(item => {
            if(player[item.name] < item.value){
                need = false
            }
        });
        if(need){
            player.change(needs)
            map.change(pos)
            return true
        }else{
            return false
        }
    }

     // 宝物
     if(goods.type == 'treasure'){
        let awards = goods.award

        talkBox.show(goods.talk);

        player.change(awards)
        map.change(pos)
        return true
       
    }
      // npc
      if(goods.type == 'npc'){
    
        if(goods.curTalkIndex>=goods.talkList.length){
            goods.curTalkIndex = goods.talkList.length-1
        }
        talkBox.show(goods.talkList[goods.curTalkIndex])
        
        return false
       
    }

 

     // 打怪
     if(goods.type == 'monster' ){
        let action = map.change.bind(map,pos)
        fightBox.show(goods,action);
        return false
    }

       // 上下楼梯
       if(goods.type == 'upStair' || goods.type == 'downStair'){
        goods.type == 'upStair' && (player.curFloor += 1);
        goods.type == 'downStair' && (player.curFloor -= 1);

       map.view(goods.type)

        return false
        
    }
}