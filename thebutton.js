console.log("theMessage is here! (the javascript is here)")

const theButton = document.getElementById("firstButton");
let theBody = document.querySelector("body");
let thePara = document.querySelector("p");
// console.log(thePara)

let i = 1;

while(i == 1){
    let click_counter = 0;

    if (click_counter == 0) {
        theButton.addEventListener('click', makeDo);
        click_counter += 1
        console.log("first if statement")
    }else if (click_counter == 1) {
        theButton.addEventListener('click', makeDo2);
        click_counter += 1
        console.log("second if statement")
    }else{
        theButton.addEventListener('click', makeDo3);
        click_counter += 1
        console.log("third if statement")
    }
}

function makeDo(){
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "you presesed the button once!"
    
}
function makeDo2(){
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "you presesed the button twice!"
    
}
function makeDo3(){
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "you presesed the button thrice!"
    
}