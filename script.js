'use strict'
let x=Math.trunc(Math.random()*20)+1;
console.log(x);
let highscore=0;
let score=20;
document.querySelector('.secret').textContent='?';
document.querySelector('.check').addEventListener('click',function(){
		var y=Number(document.querySelector('.guess').value);
        console.log(y);
        if(!y){
        	document.querySelector('.message').textContent='NO NUMBER...';
        }else if(x==y && score>0){
        	document.querySelector('.message').textContent='CORRECT ANSWER....';
        	document.querySelector('h1').textContent='YOU WON THE GAME';
        	document.querySelector('body').style.background='limegreen';
        	score=score-1;
        	document.querySelector('.scr').textContent=score;
        	if(score>highscore){
        		document.querySelector('.high').textContent=score;
        	}
        }else if(x>y){
        	document.querySelector('.message').textContent='Too Low....';
        	score=score-1;
        	document.querySelector('.scr').textContent=score;
        }else if(x<y){
        	document.querySelector('.message').textContent='Too High....';
        	score=score-1;
        	document.querySelector('.scr').textContent=score;
        }

})
//again button
document.querySelector('.again').addEventListener('click',function(){
	document.querySelector('body').style.background='black';
	document.querySelector('.message').textContent='START GUESSING....';
    document.querySelector('h1').textContent='GUESS THE NUMBER';
    document.querySelector('.scr').textContent=20;
})
