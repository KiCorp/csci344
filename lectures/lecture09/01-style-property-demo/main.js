
// const makeRed = () => {
//     // your code here...
//     console.log('Change background to red');
//     document.querySelector('#section1').style.backgroundColor = 'red';
// };

// const makeBlue = () => {
//     // your code here...
//     console.log('Change background to blue');
//     document.querySelector('#section2').style.backgroundColor = 'blue';
// };

// const makePink = () => {
//     // your code here...
//     console.log('Change background to pink');
//     document.querySelector('#section3').style.backgroundColor = 'pink';
// };

// const makeOrange = () => {
//     // your code here...
//     console.log('Change background to orange');
//     document.querySelector('#section4').style.backgroundColor = 'orange';
// };

const makeClear = () => {
    console.log('Change all backgrounds to white');
    for (let i = 0; i <document.querySelectorAll('.my-section').length; i++) {
        document.querySelectorAll('.my-section')[i].style.backgroundColor = 'transparent';
    }
};

const changeBG = (sel, color) => {
    console.log('Change background to orange');
    document.querySelector(sel).style.backgroundColor = color;
};