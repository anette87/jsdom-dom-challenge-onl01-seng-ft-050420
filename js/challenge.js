document.addEventListener("DOMContentLoaded", () => {

    let intervalID = window.setInterval(counterTimerUp, 1000);
    
    let counter = document.getElementById("counter")
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let likesList = document.getElementsByClassName("likes")[0]
    let pause = document.getElementById("pause")
    let commentSubmit = document.getElementById("submit")

    function counterTimerUp(){
        let currentCount = parseInt(counter.innerText);
        counter.innerText=currentCount+1;
    }
    function counterTimerDown(){
        let currentCount = parseInt(counter.innerText);
        counter.innerText=currentCount-1;
    }
    minus.addEventListener("click", (event) => {
        counterTimerDown();
    }); 

    plus.addEventListener("click", (event) => {
        counterTimerUp();
    });
    
    heart.addEventListener("click", (event) => {
        let listItem = document.getElementById(`${counter.innerText}`)
        if (listItem == null){
            likesList.innerHTML += `<li id=${counter.innerText}>${counter.innerText} has been liked <span class='counter'>1</span> time</li>`;
        } else if (listItem){
            let currentCount = parseInt(listItem.getElementsByClassName('counter')[0].innerText);
            listItem.innerHTML = `<li id=${counter.innerText}>${counter.innerText} has been liked <span class='counter'>${currentCount + 1}</span> times</li>`;
        }
    });

    function disableBtn() {
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;   
    }

    function enableBtn() {
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;   
    }

    pause.addEventListener("click", (event) => {
        window.clearInterval(intervalID);
        if (pause.innerText == "pause"){
            pause.innerText = "resume";
            window.clearInterval(intervalID);
            disableBtn();
        } else {
            intervalID = window.setInterval(counterTimerUp, 1000);
            pause.innerText = "pause";
            enableBtn();
        }
    });

    commentSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        let commentInput = document.getElementById("comment-input");
        let comments = document.getElementById("list");
        comments.innerHTML += `<ul><li> ${commentInput.value} </li></ul>`;
        commentInput.value = "";
    });

    






})