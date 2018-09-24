var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect();

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/Home');
});
// app.get('/Home', function (req, res) {
//     res.render('views/Home');
// });
app.get('/Students', function (req, res) {
    
    connection.query('select * from students', function (err, rows, fields) {
        if (err) throw err
        
        res.render('pages/Students',{students:rows})
        console.log('The solution is: ', rows.solution)
      })
     
});
app.get('/Subjects', function (req, res) {
    
    connection.query('select * from subjects', function (err, rows, fields) {
        if (err) throw err
        
        res.render('pages/Subjects',{subjects:rows})
        console.log('The solution is: ', rows.solution)
      })
      
});


console.log('App is running at http://localhost:8081');
app.listen(8081);