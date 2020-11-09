var ranNum = Math.floor(Math.random() * 100 + 1)

var chances = 10;

chances1.innerHTML="Chances: " + chances;

document.getElementById("btn").onclick = function(){
    var input = document.getElementById("input").value;
    previous1.innerHTML="Previous Guess: " + input;
        if(input == ranNum){
            result.innerHTML="Win";
        }else if(input > ranNum){
              chances--;
              chances1.innerHTML="Chances: " + chances;
            result.innerHTML="Too High";
        }else if(input < ranNum){
            chances--;
            chances1.innerHTML="Chances: " + chances;
            result.innerHTML="Too Low";
        }
        if(chances <= 0){
            result.innerHTML="Lose";
        }
}

