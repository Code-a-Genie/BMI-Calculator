/*function
get values
calculate
output*/

// const button = document.getElementById('calculateBMI')

// let weight = document.getElementById('weight').value
// let Ginika = 'soluchi'
// let username = Ginika
// var A = 30
// var B = 23

// console.log(A-B)
// alert('hey')


// function calculateBMI(){
//     let weight = document.getElementById('weight').value
//     let height = document.getElementById('height').value

//     let bmi = [weight/height/height]*10000
//     document.getElementById('heading').innerHTML = 'Your BMI Is:'
//     document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)
//     if (bmi<=17.5){
//         document.getElementById('message').innerHTML = 'Hell nahhh, you are hella skinny!!'
//     }
//     else if (bmi >= 18 && bmi<=25){
//         document.getElementById('message').innerHTML = 'You are lucky dawg, woulda laughed at you'
//     }
//     else{
//         document.getElementById('message').innerHTML = 'What the hell have you been eating, you are overweight!!!'
//     }

// }

// function reload() {
//     windows.location.reload()
// }


document.getElementById('calculateBMI').addEventListener('click', calculateBMI);
document.getElementById('reload').addEventListener('click', reload);

function cal