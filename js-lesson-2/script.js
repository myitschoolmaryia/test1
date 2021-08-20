const question = 'What is your name?';
const year = 2021;
// const ageStringData = prompt(question);
const ageNumberData = 37; //переводим строку в число чтобы не путать js
const dateOfBirth = year - ageNumberData;


console.log(dateOfBirth);

// if(dateOfBirth >= 1990 && dateOfBirth < 2000) {
//     console.log('вы родились в 90-е')
// } else {
//     if(dateOfBirth >= 1980 && dateOfBirth < 1990) {
//         console.log('вы родились в 80-е')
//     } else {
//         if(dateOfBirth >= 1970 && dateOfBirth < 1970) {
//             console.log('вы родились в 70-е')
//         } else {
//             if(dateOfBirth >= 1960 && dateOfBirth < 1960) {
//                 console.log('...')
//             }
//         }
//     }
// }

console.log(dateOfBirth >= 1980 && dateOfBirth < 1990, true);

let music = ''
let ganre = ''
switch (true) {
    case (dateOfBirth >= 1980 && dateOfBirth < 1990):
        console.log('вы родились в 80-е');
        music = prompt('')
        if(confirm('')) {
            ganre = 'disco'
        }
    case (dateOfBirth >= 1970 && dateOfBirth <= 1980):
        console.log('вы родились в 70-е');
        break;
    case (dateOfBirth >= 1960 && dateOfBirth < 1970):
        console.log('вы родились в 70-е');
        break;
    default:
    console.log('у меня нет такой информации');
}

console.log(music)

const date = 15
switch (true) {
    case (date < 20 && day >=10): //date < 20 && day >=10 === true
        console.log('треться декада');
        break;
    case (dateOfBirth >= 1980 && dateOfBirth < 1980):
        console.log('вы родились в 80-е');
        break;
    case (dateOfBirth >= 1970 && dateOfBirth < 1970):
        console.log('вы родились в 70-е');
        break;
    default:
    console.log('у меня нет такой информации');
}


const user = 'Brian';

switch (user) {
    case 'Brian': //user === 'Brian'
        console.log('ответ верный, выходим из switch');
    break;
    case 'Stan': //user === 'Stan'
        console.log('ответ верный, выходим из switch');
    break;
    default:
        console.log('ничего не подошло');
}