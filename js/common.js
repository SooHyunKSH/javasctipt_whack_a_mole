const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('#count_score');
const moles = document.querySelectorAll('.mole')
let lastMole;
let timeUp = false;
let score = 0;

/*두더지 나오는 시간 랜덤지정*/
function randomTime(min, max){
  return Math.round(Math.random()*(max-min)+min);
}

/*구멍 랜덤지정*/
function randomMole(holes){
  const randomMoleIndex = Math.floor(Math.random() * holes.length);
  const mole = holes[randomMoleIndex];
  return mole;
}
/*두더지 점프 랜덤지정*/
function moleJump(){
  const time = randomTime(200,1000);
  const hole = randomMole(holes);
  hole.classList.add('active');

  setTimeout(function(){
    hole.classList.remove('active');
    if(!timeUp){
      moleJump();
    }
  }, time)
}
/*버튼 클릭 시 게임시작*/
function startGame(){
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  moleJump();

  setTimeout(function(){
    timeUp = true;
  },10000);
}

function catchMole(){
  score += 50;
  scoreBoard.textContent = score;
}
