let wholeForm = document.querySelector('form');
let sendBtn = document.querySelector('.sendMail');
let resetBtn = document.querySelector('.resetForm');
let emailField = document.querySelector('#email');
let subjectField = document.querySelector('#textSubject');
let textField = document.querySelector('#text');
let spinner = document.querySelector('.spinner');
let emailSent = document.querySelector('.sentEmail');

wholeForm.addEventListener('click', validateForm);
sendBtn.addEventListener('click', showGifs);
resetBtn.addEventListener('click', clearForm);

function validateForm() {
    if(emailField.value != "" && subjectField.value != "" && textField.value != "") {
        sendBtn.disabled = false;
    }
}


function showGifs() {
    spinner.style.display = "block";
    setTimeout(() => {
        spinner.style.display = "none";
        emailSent.style.display = "block";
        setTimeout(() => {
            emailSent.style.display = "none";
            sendBtn.disabled = true;
            wholeForm.reset();
        }, 5000);
    }, 3000);
}

function clearForm() {
    wholeForm.reset();
}


















































// function printNumbers(number) {
//     while (number <= 100) {
//         if(number % 3 == 0 && number % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if(number % 3 == 0) {
//             console.log('Fizz');
//         }
//         else if(number % 5 == 0 && number % 3 != 0) {
//             console.log('Buzz');
//         } else {
//             console.log(number);
//         }
//         number++;
//     }
// }

// printNumbers(1);

// function chessBoard(n) {
//     let totalN = n * n;
//     output = "";
//     while (output.length < totalN) {
//         output += " ";
//         output += "#";
//         if(output.length % n == 0) {
//             output += "\n";
//         } 
//     }
//     return output;
// }

// console.log(chessBoard(8));

// function pattern(size) {
//     let sizeSquare = size * size;
//     console.log(sizeSquare);
//     let i = 0;
//     let line = '';
//     // for(let i = 0; i <= sizeSquare; i++) 
//     while (line.length < sizeSquare) {
//         let start;
//         for(let j = 0; j < sizeSquare; j++) {
//             if(start == '#') {
//                 start = ' ';
//             } else {
//                 start = '#';
//             }
//             line += start;
//             if(line.length % size === 0) {
//                 line += '\n';
//             }
//         }
//         i++;
//         console.log(line.length);
//         return line;
//     }
// }

// console.log(pattern(8));