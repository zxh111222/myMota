

export function FightBox(player) {
  this.player = player;
  this.pageContainer = document.querySelector('#fight');
  this.content = document.querySelector('#fight .content');
}

/**
 * 显示战斗窗口
 * @param monster 怪物对象
 */
FightBox.prototype.show = async function (monster,action) {
  this.player.action = "fight"

  this.pageContainer.style.display = "block"

  //设置玩家信息
  this.pageContainer.querySelector('.player #level span').innerHTML =
    this.player['level'];
  this.pageContainer.querySelector('.player #life span').innerHTML =
    this.player['life'];
  this.pageContainer.querySelector('.player #attack span').innerHTML =
    this.player['attack'] 
  this.pageContainer.querySelector('.player #defense span').innerHTML =
    this.player['defense'];

  //设置怪物信息
  this.pageContainer.querySelector('.monster img').src = `${IMAGE_PATH}/${monster.img}`;
  this.pageContainer.querySelector('.monster #life span').innerHTML =
    monster['life'];
  this.pageContainer.querySelector('.monster #attack span').innerHTML =
    monster['attack'] ;
  this.pageContainer.querySelector('.monster #defense span').innerHTML =
    monster['defense'];

  //计算打仗过程
  var playerLife = this.player['life'];
  var monsterLife = monster['life'];

  while (monsterLife >0) {
    console.log('怪物血量：${monsterLife}')
    // 玩家战斗信息
    await new Promise(res=>{
        setTimeout(() => {
            let playerAttack = this.player['attack'] - monster['defense'];
            let playerDom = document.createElement('div')
            playerDom.className= "playerInfo"

            playerDom.innerHTML = `你打了<span >${monster.name}</span><span '>${playerAttack}</span>点血`;
            this.content.appendChild(playerDom);
            
            // 怪物血量
            monsterLife -= playerAttack;
            res()
        }, 300);
    })
    
    // 怪物战斗信息
    await new Promise(res=>{
        setTimeout(() => {
            let monsterDom = document.createElement('div')
            monsterDom.className= "monsterInfo"
            if (monsterLife > 0) {
              var monsterAttack =  monster['attack'] - this.player['defense'];
            
              monsterDom.innerHTML = `${monster.name}打了<span >你</span><span >${monsterAttack} </span>点血`;
              
              playerLife -= monsterAttack;
            }else{
                monsterDom.innerHTML = `${monster.name}败了`;
            }
            this.content.appendChild(monsterDom);

            res()
        }, 300);
    })
 

    // 滚动条置顶
    this.content.scrollTop = this.content.scrollHeight;
  }


    //战斗胜利
   

    await new Promise(res=>{
        setTimeout(() => {
            let gold = monster.gold
            let exp = monster.exp
            var resultDom = document.createElement('div')
            resultDom.className = "resultInfo"

            // 战斗胜利
              if (monsterLife <= 0) {
             resultDom.innerHTML = `
                                <h1>战斗胜利！</h1>
                                <div>你损失了${
                                  this.player['life'] - playerLife
                                }血。</div>
                                <div>增加了${exp}经验和${gold}金币</div>
        
                                <div class="hint">&gt;&gt;&gt;按空格键继续&lt;&lt;&lt;</div>
                           `;
                           this.player['life'] = playerLife;
                           this.player['exp'] += exp;
                           this.player['gold'] += gold;
                           this.player.updatePageInfo()
            }
            // 战斗失败
            else{
                resultDom.innerHTML = `
                        <h1>战斗失败！</h1>
                     
                        <div class="hint">&gt;&gt;&gt;按空格键继续&lt;&lt;&lt;</div>
                    `;
            }
            this.content.appendChild(resultDom);
            res()
        }, 300);
    })

    this.content.scrollTop = this.content.scrollHeight;  

    // 判断是否有后续操作
   if(action) action()
};

/**
 * 关闭战斗框
 */
FightBox.prototype.close = function () {
  this.player.action = "move"
  this.content.innerHTML = "";
  this.pageContainer.style.display = 'none';
  
};
