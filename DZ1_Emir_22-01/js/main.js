const emailTxt = document.querySelector('#email')
const passwordTxt = document.querySelector('#password')
const logIn = document.querySelector('#logIn')
const blockHtml = document.querySelector('#block')

const emailCheck = /^[a-zA-Z0-9]+@gmail.com$/
const passwordCheck = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{2,}/g

logIn.addEventListener('click', () => {
    const checkEma = emailTxt.value.match(emailCheck)
    try {
        if (checkEma.input.length > 0) {
            console.log('email is correct')
        }
    } catch (e) {
        console.log('email is not correct')
    }
    const checkPass = passwordTxt.value.match(passwordCheck)
    try {
        if (checkPass.length > 0) {
            console.log('password is correct')
        }
    } catch (e) {
        console.log('password is not correct')
    }
})

let block = 0
let blockBack = 1350

const movement = () => {
    if (block < 1350) {
        block += 3
        blockHtml.style.left = `${block}px`
        setTimeout(movement, 5)
    } else if (block === 1350 && blockBack > 0) {
        blockBack -= 3
        blockHtml.style.left = `${blockBack}px`
        setTimeout(movement, 5)
    } else {
        block = 0
        blockBack = 1350
        movement()
    }
}

movement()