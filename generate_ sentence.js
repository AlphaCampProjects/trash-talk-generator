const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
};

const phrase = ['很簡單', '很容易', '很快', '很正常'];

const roles = {
  engineer: '年薪百萬的工程師',
  designer: '靈感不斷的設計師',
  entrepreneur: '有前途的創業家',
};
function index(wordsList) {
  number = Math.floor(Math.random() * wordsList.length);
  return wordsList[number];
}

function generateSentence(character) {
  return `身為一個${roles[character]}，${index(task[character])}，${index(
    phrase
  )}吧！`;
}

module.exports = generateSentence;
