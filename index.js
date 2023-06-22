const fieldW = document.querySelector('.game-field').offsetWidth;
const fieldH = document.querySelector('.game-field').offsetHeight;
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const scoreTarget = document.querySelector('.target');
const vissibleActivator = document.querySelector('.game-over');



start();

let topH = 0; 
let rightW = 0;

let target = {
    position:{
        top: topH,
        right: rightW,
    },

};


function displayTarget(){
    topH = (Math.random() * fieldH) - 50;
    rightW = (Math.random() * fieldW) - 50;



    if(topH <= 0){
        topH = 0;
    }
    if(rightW <= 0){
        rightW =0;
    }
    
    target.position.top = topH;
    target.position.right = rightW;

    document.querySelector('.target').style.top = `${topH}px`;
    document.querySelector('.target').style.right = `${rightW}px`;


    isTargetClicked = false;
    scoreTarget.addEventListener('click', incrementScore);
    
};

let score = 0;


function incrementScore() {
    if (!isTargetClicked) {
        score++;
        isTargetClicked = true;
        document.querySelector('.js-score').innerHTML = score;
        scoreTarget.removeEventListener('click', incrementScore);
    }
}



function start(){
    let isPlaying = false; 
    let intervalId;


    startButton.addEventListener('click',() => {
        if(!isPlaying){
            intervalId = setInterval(displayTarget, gameStyle);
            isPlaying = true;
            vissibleActivator.classList.add('vissibile');
            
            setTimeout(() =>{
                clearInterval(intervalId);
                isPlaying = false;
                resetTargetPosition();
                
            }, 30000);
        }
    });

    stopButton.addEventListener('click',() => {
        if(isPlaying){
            clearInterval(intervalId);
            isPlaying = false;
            resetTargetPosition();
            
        }
    });

    
}

function resetTargetPosition() {
    document.querySelector('.target').style.top = '48%';
    document.querySelector('.target').style.right = '48%';
    vissibleActivator.classList.remove('vissibile');
    document.querySelector('.js-score').innerHTML = 0;
}

gameMode();

let gameStyle = 4000;

function gameMode(selectedGameStyle){

    

    const easyMode =document.querySelector('.js-easy');
    const mediumMode =document.querySelector('.js-medium');
    const hardMode =document.querySelector('.js-hard');

    
    easyMode.addEventListener('click', () => gameStyle = 4000);
    mediumMode.addEventListener('click',() => gameStyle = 1000);
    hardMode.addEventListener('click',() => gameStyle = 700);

    return selectedGameStyle;
    
}

gameMode(gameStyle);


    

    


