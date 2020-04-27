const express = require('express');
const app = express();

// Tell express to serve the static files in the public folder
app.use(express.static('public'));


// Serving static content: 
app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/staticallyservedhtml.html');
})


// // Serving server side rendered content:
// const fs = require('fs');

// const ssrPage = fs.readFileSync('/public/serversiderenderedhtml.html', "utf8");

// app.get('/ssr', (req, res) => {
//     return res.send(ssrPage);
// })



app.listen(80, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on", 80);
});