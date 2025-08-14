const icons = document.querySelectorAll(".icons")
const choice = ["rock","paper","scissors"];
function getcomputerchoice(){
    const randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}
function getResult(user,comp){
    if(user==comp){
        return "its a draw!";
    }
    if((user=="rock" && comp=="scissors") || (user=="paper" && comp=="rock") || (user=="scissors" && comp=="paper")){
        document.getElementById("user-score").innerText = parseInt(document.getElementById("user-score").innerText)+1;
        return "you win!";
    }
    else{
        document.getElementById("Comp-score").innerText =parseInt(document.getElementById("Comp-score").innerText)+1;
        return "you lose!";
    }
}
//icon in icons
icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        const user_choice = icon.getAttribute("name");
        const comp_choice = getcomputerchoice();
        const result = getResult(user_choice,comp_choice);
        const container = document.querySelector("#msg-container")
        container.style.fontSize = "15px";
        if(result=="you win!"){
            container.style.backgroundColor = "green";
        }
        else if(result=="its a draw!"){
            container.style.backgroundColor = "gray";
        }
        else{
            container.style.backgroundColor = "red";
        }
        //msg-container shouldnt be accessed when innertext is to be changes it should be acessed only related to styles 
        document.getElementById("msg").innerText = `You : ${user_choice.toUpperCase()} and Comp : ${comp_choice.toUpperCase()} so ${result.toUpperCase()}!`;
    });
});