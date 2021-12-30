const mysql = require('mysql')
// const fs = require("fs")
// const read = fs.readFileSync("course.json")
// const Data = JSON.parse(read)
const dbConn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pink@123",
    database:"merakiApi"
})
dbConn.connect((err)=>{
    if (err) throw err;
    console.log('detabase connected');
    var sql=`CREATE TABLE courseDetails (id INT PRIMARY KEY ,name VARCHAR (200),
    logo VARCHAR(100),notes VARCHAR(9999),days_to_complete INT,
    short_description VARCHAR(255) ,type VARCHAR(100) ,course_type VARCHAR(100),
    lang_available VARCHAR(100))`
    dbConn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
})
// dbConn.connect(function(err) {
//     if (err) throw err;
//     console.log("Database Connected!");
//     var values=[]
//     for (let i = 0; i < Data.length; i++) {
//         // console.log(Data);
//         values.push([Data[i].id, Data[i].name, Data[i].logo, Data[i].notes, Data[i].days_to_complete, Data[i].short_description, Data[i].type,Data[i].course_type, Data[i].lang_available.toString()])
//     } 
//     // console.log(values);
//     var sql=`INSERT INTO courseDetails  VALUES?`
//     dbConn.query(sql,[values],(err,result)=>{
//         if (err) throw err;
//         console.log('data inseted succesfully.');
//     })
// }) 

module.exports=dbConn