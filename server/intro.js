console.log('Hello from the server');

const express = require('express');
const app = express();
const port = 4141;

// app.listen(port, fConsoleTest);
// function fConsoleTest(){
//     console.log('Successful test!');
// } // end fConsoleTest

// app.listen(port, fPeopleDisplay);
// function fPeopleDisplay(){
//     let peopleModule = require('/Users/ryanudelhoven/Documents/T2/gacrux-node-intro/server/public/scripts/people-module.js');
//     console.log(peopleModule);
//     peopleModule.displayPeople();
// } // end fPeopleDisplay

app.listen(port, fColorDisplay);
function fColorDisplay(){
    let colors = require('/Users/ryanudelhoven/Documents/T2/gacrux-node-intro/server/public/scripts/testFile.js');
    console.log(colors);
} // end fColorDisplay