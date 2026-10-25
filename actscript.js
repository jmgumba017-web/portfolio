const button1 = document.getElementById("button")
const button2 = document.getElementById("button2")
const message = document.getElementById("message")


function showMessage(text){
    message.innerHTML = text
}

function loadMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account....")
        },1000)
    })
}

button1.addEventListener("click", function(){
    message.innerHTML = "Loading..."
    

    setTimeout(function(){

        showMessage("Welcome to JavaScript!")

    },3000)
})









button2.addEventListener("click",function(){

    message.innerHTML = "Loading...."



    loadMessage()


     .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile....");
            },3000)
        })
    })

        .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome!");
            },3000)
        })
    })



    .then(function(result){
        message.innerHTML = result;
    })
})
    
