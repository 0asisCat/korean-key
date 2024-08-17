// https://www.geeksforgeeks.org/build-a-virtual-keyboard-using-html-css-javascript/

// variables for each headers
// array of keys 
// function for quotes array

// in the future let users decide what timelimit
let timeLimit = 60;

// add quotes from books
let quotes_array = ["멋있지만 너무 위험하고.","인도 속담에 그런 말이 있대요. 잘못 탄 기차가 때론 목적지에 데려다 준다고.","죽음을 찾지 말라 죽음이 당신을 찾을 것이니.","안 좋은 추억이 가슴에 더 오래 남는데요.","갑자기 어떤 것을 깨닫게 되는 순간이 있다.","눈을 왜 그렇게 뜨지? 달리 어떻게 뜨지?","내 마음을 놓고 갔어.","건투를 빕니다. 이번 생은, 어차피 모두 처음이니까.","춤추라, 아무도 바라보고 있지 않은 것처럼.","사랑하라, 한 번도 상처받지 않은 것처럼.","노래하라, 아무도 듣고 있지 않은 것처럼.","일하라, 돈이 필요하지 않은 것처럼.","살라, 오늘이 마지막 날인 것처럼."];

let cpm_text = document.querySelector(".curr-cpm");
let wpm_text = document.querySelector(".curr-wpm");
let accuracy_text = document.querySelector(".curr-accuracy");
let errors_text = document.querySelector(".curr-errors");
let time_text = document.querySelector(".curr-time");

const option1 = document.querySelector(".practice-typing");
const option2 = document.querySelector(".typing-speed");
const option3 = document.querySelector(".restart-btn");
const headerStats = document.querySelector("#header");
const options = [{name:"Practice Typing",header:"none"},{name:"Typing Speed",header:"flex"},{name:"Restart Button",header:"none"}];
const keyboard = {};

option1.onclick = practiceTyping;
option2.onclick = typingSpeed;
option3.onclick = restartButton;

function state(options){
    headerStats.style.display = options.header;
}

function practiceTyping(){
    state(options[0]);
}

function typingSpeed(){
    state(options[1]);
}

function restartButton(){
    state(options[2]);
}
