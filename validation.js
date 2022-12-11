let submitBtn = document.getElementById("submitBtn")
let regEmail = document.getElementById("reg_email")
let regPass1 = document.getElementById("reg_pass1")
let regPass2 = document.getElementById("reg_pass2")
let regName = document.getElementById("reg_name")
let regLastname = document.getElementById("reg_lastname")

let isEmailValid = () => {
    const emailRegex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailRegex.test(regEmail.value)
}

let isNameValid = () => {
    const nameRegex =/[A-Za-z ]{3,32}/
    return nameRegex.test(regName.value)
}

let isLastnameValid = () => {
    const LastnameRegex = /[A-Za-z ]{3,32}/
    return LastnameRegex.test(regLastname.value)
}

let isPasswordValid = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(regPass1.value)
}






regEmail.addEventListener("input", () => {
    if(!isEmailValid()){
        regEmail.style.border = "2px solid red"
    }
    else{
        regEmail.style.border = "2px solid lightgreen"
    }
})

regName.addEventListener("input", () => {
    if(!isNameValid()){
        regName.style.border = "2px solid red"
    }
    else{
        regName.style.border = "2px solid lightgreen"
    }
})

regLastname.addEventListener("input", () => {
    if(!isLastnameValid()){
        regLastname.style.border = "2px solid red"
    }
    else{
        regLastname.style.border = "2px solid lightgreen"
    }
})

regPass1.addEventListener("input", () => {
    if(!isPasswordValid()){
        regPass1.style.border = "2px solid red"
    }
    else{
        regPass1.style.border = "2px solid lightgreen"
    }
})

var check = function() {
    if (document.getElementById('reg_pass1').value == document.getElementById('reg_pass2').value && isPasswordValid()===true) {
      document.getElementById('reg_pass2').style.border = '2px solid lightgreen';
    } else {
        document.getElementById('reg_pass2').style.border = '2px solid red';
    }
  }


  submitBtn.addEventListener("input", () => {
    if(!isEmailValid()==true){
        submitBtn.disabled = false;
        console.log('eeee')
    }
    else{
        submitBtn.disabled = true;
    }
})