const express = require('express');
const path = require('path');
const App = express();

// const fs = require('fs');
// console.log(path.join(__dirname , "../public"))
const staticData = path.join(__dirname , "../public");



App.use(express.static(staticData));

App.get('/',(req,res)=>{
    res.write('<h1>Data From the server</h1>')
    res.write('<p>Data From the server</p>')
    res.send();
});
App.get('/About', (req, res) => {
    res.write('<p>About From the server</p>');
    res.send();
});

App.listen(1000, () => {
    console.log('Connected...');
})