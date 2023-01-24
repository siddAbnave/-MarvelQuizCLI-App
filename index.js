// Ex-10,11
var readlineSync = require('readline-sync');
var score = 0;


var marvelArray = [{
  question : "What is the first movie of MCU?",
  answer : "Ironman"
}, 
{
  question : "Who is the first avenger of marvel?",
  answer : "Captain America"
},
{
  question : "Who is the god of Thunder in Asgard ?",
  answer : "Thor" 
},
{
  question : "who was the first lady avenger ?",
  answer : "Black Widow"
},
{
  question : "who was the main villian of infinity Saga?",
  answer : "Thanos"
}
];

function game(){
for(var i = 0; i < marvelArray.length; i+= 1){
  var currentQues = marvelArray[i];
  play(currentQues.question, currentQues.answer);
 }
}

function play (question , answer){
  var userAns = readlineSync.question(question);
   
  
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log("Youe are Right!");
    score = score + 1;
  }
  else{
    console.log("Youe are Wrong!");
  }
  console.log("Current score : " + score);
  console.log("-----------");
}

function welcome(){
  var userName = readlineSync.question('May i have your name ?');
  console.log("Welcome " + userName);
}

function showHighScore(){
  console.log("Your Total score : " + score);

  // highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showHighScore();

