const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "entries.html"
    }else{
        alert("Your Username or Password is wrong, Please Check and Try again!")
    }
})


function authentication(username,password){
    if(username === "josiah" && password === "josiah"){
        return true
    }else{
        return false
    }
}

function loginform (){
    loginform.style.transform = "translatex(300px)"
}

$(document).ready(function(){

    $('.message a').click(function(){
       $('form').animate({height:"toggle", opacity:"toggle"}, "slow")
    })
 
   });