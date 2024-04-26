let displayArea = document.getElementById("displayArea");

//button A
let triviaA = document.getElementById("triviaA").addEventListener("click", function(){
    triviaAPIa();
});

//button B
let triviaB = document.getElementById("triviaB").addEventListener("click", function(){
    triviaAPIb();
});

//button C
let triviaC = document.getElementById("triviaC").addEventListener("click", function(){
    triviaAPIc();
});







//API function
async function triviaAPIa(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean", {
    
    }).then(Response => Response.json());

    displayArea.innerText = apiResponse.results["0"].question


    console.log(apiResponse);
    
};
async function triviaAPIb(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=boolean", {
    
    }).then(Response => Response.json());

    displayArea.innerText = apiResponse.results["0"].question


    console.log(apiResponse);
    
};
async function triviaAPIc(){
    let apiResponse = await fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean", {
    
    }).then(Response => Response.json());

    displayArea.innerText = apiResponse.results["0"].question


    console.log(apiResponse);
    
};
