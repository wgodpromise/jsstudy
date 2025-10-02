const input1 = document.getElementById('myInput1')
const input2 = document.querySelector('#myInput2')
const btn = document.getElementById('btn')
const output = document.querySelector('#result')

btn.addEventListener('click', (e) => {
    
    e.preventDefault()
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    const errors = {
        one: false,
        two: false
    }
    let resultText = ''
    if  (isNaN(num1)){
        errors.one = true
    }
    if (isNaN(num2)){
        errors.two = true
    }
    if (errors.one && errors.two){
        resultText = 'Ошибка: оба значения не являются числом'
    }
    if (errors.one&&!errors.two){
        resultText = 'Ошибка: первое значение не является числом'
    }
    if (!errors.one&&errors.two){
        resultText = 'Ошибка: второе значение не является числом'
    }
    if (!errors.one&&!errors.two){
        resultText = `Результат: ${num1+num2}`
    } 

    output.innerText = resultText
})
