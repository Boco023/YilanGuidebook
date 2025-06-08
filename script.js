const dialogues = [
  "放滿繪本的書櫃。",
  "你走進森林深處，聽見奇怪的聲音。",
  "前方似乎有個神秘的祭壇……"
];

const backgrounds = [
  "images/startpage.jpg",   // 首頁
  "images/trainStation.jpg",
  "images/trail1.jpg"
];

let currentDialogueIndex = 0;

function startGame() {
  updateScene();
}

function nextDialogue() {
  currentDialogueIndex++;
  if (currentDialogueIndex < dialogues.length) {
    updateScene();
  } else {
    document.getElementById('dialogue-text').textContent = "（劇情結束）";
  }
}

function updateScene() {
  const background = document.getElementById('background');
  const character = document.getElementById('character');
  const dialogueBox = document.getElementById('dialogue-box');

  background.src = backgrounds[currentDialogueIndex];

  if (currentDialogueIndex === 0) {
    // 第 0 頁：首頁，不顯示角色和對話框
    character.style.display = 'none';
    dialogueBox.style.display = 'none';
    // 讓背景整個可以點擊
    background.onclick = () => nextDialogue();
  } else {
    // 顯示角色和對話框
    character.style.display = 'block';
    dialogueBox.style.display = 'flex';
    document.getElementById('dialogue-text').textContent = dialogues[currentDialogueIndex];
    // 取消背景點擊事件
    background.onclick = null;
  }
}

startGame();
