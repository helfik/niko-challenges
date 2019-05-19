

let factorialForm = document.getElementById('factorialForm');
let variant = document.getElementById('variant');
let fizzBuzzForm = document.getElementById('fizzBuzzForm');

factorialForm.addEventListener('submit', e => {
    e.preventDefault();

    let selectedVariant = variant.options[variant.selectedIndex].value;
    let number = document.getElementById('factorialValue').value;
    let result = document.getElementById('result');

    switch (selectedVariant) {
        case 'for':
            result.innerText = fact(number);
            break;
        case 'recursion':
            result.innerText = recursionFact(number);
            break;
        default:
            alert('Sorry');
    }

});

fizzBuzzForm.addEventListener('submit', e => {
    e.preventDefault();

    let number = document.getElementById('number').value;
    for (let i = 1; i <= number; i++) {
        if(i % 15 === 0) {
            console.log('SKIM is a great place to work!');
        } else if (i % 3 === 0) {
            console.log('SKIM');
        } else if (i % 5 === 0) {
            console.log('is a great place to work');
        } else {
            console.log(i);
        }
    }
});


function fact(number) {
    let result = 1;
    for (let i = number; i > 1; i--) {
        result = result * i;
    }

    return result;
}

function recursionFact(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * recursionFact(number - 1);
    }
}


