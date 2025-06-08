const gameElement = document.getElementById("game");

// 初始劇情
function startGame() {
    gameElement.innerHTML = `
    <p>你來到了一座神秘的森林，前方有兩條小徑。</p>
    <button onclick="choosePath('left')">走左邊的路</button>
    <button onclick="choosePath('right')">走右邊的路</button>
    <img src="images/trainStation.jpg" alt="神秘森林" style="max-width: 800px; width: 100%; display: block; margin: 20px auto;">
    `;
}


function choosePath(path) {
    if (path === 'left') {
        gameElement.innerHTML = `
      <p>你遇到一位老獵人，他給了你一把弓。</p>
      <button onclick="startGame()">重新開始</button>
    `;
    } else {
        gameElement.innerHTML = `
      <p>你被一隻狼發現了！牠正慢慢靠近你……</p>
      <button onclick="startGame()">重新開始</button>
    `;
    }
}


startGame();
