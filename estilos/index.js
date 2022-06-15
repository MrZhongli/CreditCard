const inputCard = document.querySelector('#inputCard')
const inputDate = document.querySelector('#inputDate')
const inputCVV = document.querySelector('#inputCVV')
const inputName = document.querySelector('#inputName')

const maskNumber = '####-####-####-####';
const maskDate = '##-##';
const maskCVV = '###';
const maskName = '################'

let current = '';
let cardNumber = [] 
let dateNumber = [] 
let cvvNumber = []
let nameNumber = []


inputName.addEventListener('keypress', (event)=>{
    if(event.key === 'Tab'){
        return;
    }
    const numbers = '0123456789'
    // console.log(numbers.search)
    if(numbers.search(event.key) != -1){
        event.preventDefault()
    }
})


inputCard.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }
    else{
        e.preventDefault();
        handleInput(maskNumber, e.key, cardNumber);
        inputCard.value = cardNumber.join('')
    }
})

inputDate.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }
    
        e.preventDefault();
        handleInput(maskDate, e.key, dateNumber);
        inputDate.value = dateNumber.join('')
    
})


inputCVV.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        return;
    }
    
        e.preventDefault();
        handleInput(maskCVV, e.key, cvvNumber);
        inputCVV.value = cvvNumber.join('')
    
})


function handleInput(mask, key, arr){
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];

    if( key === 'Backspace' && arr.length > 0){
        arr.pop()
        return;
    }

    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === '-' || mask[arr.length] === '/') {
            arr.push(mask[arr.length], key);
        }
        else {
            arr.push(key)
        }
    }
}


