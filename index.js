let increaseVotes = document.getElementById('increment');
let clear = document.getElementById('clear');
let int = document.getElementById('number');
let votes = 0;

increaseVotes.addEventListener('click',function(){
    votes +=1;
    int.innerHTML = votes;  
})

clear.addEventListener('click',function(){
    votes = 0;
    int.innerHTML = votes;  
})