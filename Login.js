console.log(document)

const var1 = document.getElementById("hh")
console.log(var1)

const Button = document.getElementById("click")
console.log(Button)

const Dbclick = document.getElementById("dbclick")
console.log(Button)

const Input = document.getElementById("input")

const username = document.getElementById("username")

const message = document.getElementById("message")

const password = document.getElementById("password")

Button.addEventListener(
    "click", function () {
        var1.innerHTML = "Click me!"
        var1.style.backgroundColor = "Red"
        
    }
)

Dbclick.addEventListener (
    "dblclick", function () {
        var1.innerHTML = "You double to nothing!!"
        var1.style.backgroundColor = "Blue"
    }
)

username.addEventListener (
    "username", function () {
        var1.innerHTML = "Typing" + Input.value
    }
)

username.addEventListener (
    "focus", function () {
        username.style.backgroundColor = "Violet"
    }
)

username.addEventListener (
    "blur", function () {
        username.style.backgroundColor = "White"
    }
)

///password.addEventListener (
    ///"focus", function () {
      ///  password.style.backgroundColor = "Pink"
   // }
//)

//password.addEventListener (
  //  "blur", function () {
    //    password.style.backgroundColor = "White"
 //   }
//)

username.addEventListener (
    "change", function () {
        var1.innerHTML = "Welcome to Basic Log in" + username.value + "!"
    }
)