// //express js setup
// const fetch = (...args) =>
// 	import('node-fetch').then(({default: fetch}) => fetch(...args));const express = require('express');

const express = require('express')
const app = express();
const path = require('path')
const port = 5000;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

app.get("/", (_req, res) => {
  
    // res.send('index');
    res.render("index")

})

app.listen(port, () => {
    console.log("test")
});
