import { init } from "./init.js";


// 游戏开始按钮
window.addEventListener('load', function () {

    // document.querySelector('.story').style.display = "none"
    // document.querySelector('.gameWrap').style.display = "block"
    // init();

    document
      .querySelector('#startPlay')
      .addEventListener('click', function () {
          document.querySelector('.story').style.display = "none"
          document.querySelector('.gameWrap').style.display = "block"
          init();
      });
  });


  // 全局参数
window.IMAGE_PATH = 'images/'; //图片路径
window.GRID_WIDTH = 32; //地图格子宽度
window.GRID_HEIGHT = 32; //地图格子高度
window.WAY_ID = 509; //道路格子id



