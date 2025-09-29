const in1 = document.getElementById('myInput1')
const in2 = document.querySelector('#myInput2')
const btn = document.getElementById('myButton')
const out = document.querySelector('#result')

btn.addEventListener('click', (func)=>{
    
    func.preventDefault()
    const num1 = Number(in1.value)
    const num2 = Number(in2.value)
    const errors = {
        one: false,
        two: false
    }
    let resultText = ''
    if  (isNan(num1)){
        errors.one = true
    }
    if (isNan(num2)){
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
        const result = num1 + num2;
        resultText = `Результат: ${num1+num2}`;
    } 

    out.innerText = resultText
})
