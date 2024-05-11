var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var dbConnection = require('./config/db');
var config = require('./config/config');
var http = require('http')

var app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));


// Main routes
app.use(express.static(path.join(__dirname, 'build/')));

app.get('/', (req, res) =>{
    console.log("ssss");
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.get('/employee', (req, res) =>{
    console.log("aaaa");        
    res.sendFile(path.join(__dirname, 'build/employee.html'));
});
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, 'build/register.html'));
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, 'build/login.html'));
});

// Comman routes
app.get('/profile', (req, res) =>{
    res.sendFile(path.join(__dirname, 'build/comman-page/profile.html'));
});
app.get('/forgot-password',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/comman-page/forgot-password.html'));
});

// Admin routes
app.get('/admin-panel',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/users.html'));
});
app.get('/admin-panel/education',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/education.html'));
});
app.get('/admin-panel/cities',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/cities.html'));
});
app.get('/admin-panel/skills-program',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/skills-program.html'));
});
app.get('/admin-panel/Application',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/application.html'));
});
app.get('/admin-panel/users',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/users.html'));
});
app.get('/admin-panel/users',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/admin-panel/users.html'));
})

// Student routes
app.get('/student-panel/skills-program',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/student-panel/skills-program.html'));
});
app.get('/student-panel/skills-task',(req, res) =>{
    res.sendFile(path.join(__dirname, 'build/student-panel/skills-task.html'));
});
//employee routes
// app.get('/student-panel/employee',(req, res) =>{
//     res.sendFile(path.join(__dirname, 'build/student-panel/employee.html'));
// });

// Trainer routes

require('./routes')(app);

const hostname = config.HOST;
const port = config.PORT;

app.listen(port, hostname, (req, resp) => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


module.exports = app;