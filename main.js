//랜덤 숫자 생성하기 !
//user, input창에 숫자 입력하고 go 버튼 누르기! 
// 함수 실행, userNum과 computerNum 비교학!
// userNum < computerNum = Up
// userNum > computerNum = Down
// userNum = computerNum = Correct !
// 결과 div에 표시하기 !
// input 창에 focus 할 때 값 초기화하기 !
// reset 버튼 누르면 초기화 및 새로운 랜덤 숫자 생성 !
// 총 5번의 기회 제공, 틀릴 때마다 기회 1씩 차감, 기회 모두 소진 시 게임 종료(go 버튼 disabled) !
// 1~100 이외의 숫자 입력 시, "1~100 사이의 숫자를 입력해주세요", 기회 차감 x !
// 입력한 숫자 입력 시, "다른 숫자를 입력해주세요", 기회 차감 X !

let computerNum = 0;
let userNum = document.getElementById("user-area");
let clickGoButton = document.getElementById("button-area");
let resultArea = document.getElementById("result-area");
let clickResetButton = document.getElementById("reset-area");
let chances = 5;
let chancesArea = document.getElementById("chance-area");
let gameOver = false;
let history = [];


clickGoButton.addEventListener("click", play);
userNum.addEventListener("focus", function(){
    userNum.value = "";
})
clickResetButton.addEventListener("click", reset);



function pickRandomNumber(){
    computerNum = Math.floor(Math.random() * 100 + 1);
    console.log("결과", computerNum);
}


function play(){
    let userValue = userNum.value;

     if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1부터 100 사이의 숫자를 입력해주세요.";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "다른 숫자를 입력하세요";
        return;
    }
    

    chances--;
    chancesArea.textContent = `남은 기회는: ${chances}번`
    console.log("chance", chances);

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        clickGoButton.disabled = true;
    }

    history.push(userValue);
    console.log(history);

 
   

    if(userValue < computerNum){
        resultArea.textContent = "UP";
    } else if(userValue > computerNum){
        resultArea.textContent = "Down";
    } else{
        resultArea.textContent = "Correct";
    }
}

function reset(){
    // 값 초기화하기
    userNum.value = "";
    // 새로운 랜덤 숫자 생성하기
    pickRandomNumber();
    //
    resultArea.textContent = "결과값을 입력하세요.";
}

pickRandomNumber();