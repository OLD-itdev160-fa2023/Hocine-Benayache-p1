

var user = 'A LAND OF ART AND HISTORY';
var visit = '  !!         COME TO VISIT';
var welcome = user + visit ;
var welcomeEl = document.getElementById('welcome');
welcomeEl.textContent = welcome;

timer();
function timer (){
    let welcome = document.getElementById("welcome");
    welcome.style.opacity = welcome.style.opacity == 0? 1: 0;
    setTimeout(timer,600);
}




