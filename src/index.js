import './style/style.css'

const generateButton = document.querySelector('#generate-button')
const copyButton = document.querySelector('#copy-button')
const input = document.querySelector('input')

const writePassword = () =>{
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength = 12
    let password = ''

    for(let i = 0; i<passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber +1)
    }

    input.value = password
}

const copyPassword = () =>{
    const password = document.querySelector('input')
    password.select()
    document.execCommand("copy")
    console.log(password.value)
}

generateButton.addEventListener('click', writePassword)
copyButton.addEventListener('click', copyPassword)

