// 对话框
export function TalkBox(player) {
    this.player = player;
    this.pageContainer = document.querySelector('#dialog')
    this.pageInfo = document.querySelector('#dialog .content .info')

    this.goods
  }
  
  TalkBox.prototype.show = function(talk) {
    this.player.action = 'talk';
    this.pageInfo.innerHTML = talk;
        this.pageContainer.style.display = "block";
  };

  
  TalkBox.prototype.close = function(action) {
    this.player.action = 'move';
    this.pageInfo.innerHTML = ""
    this.pageContainer.style.display = "none";

    if(action) action()
  
  };