const express = require("express")
const app = express()
const mysql = require("mysql")
const db = require("./db")
app.use(express.json())
app.get("/",(req,res)=>{
    db.query("SELECT * FROM courseDetails", function (err, result, fields) {
          if (err) throw err;
        //   console.log(result);
        res.send(result)
        });
})
app.post("/",(req,res)=>{
  var sql = `INSERT INTO courseDetails (id,name,logo,notes,days_to_complete,short_description ,type ,course_type,lang_available) VALUES ('${req.body.id}','${req.body.name}','${req.body.logo}','${req.body.notes}','${req.body.days_to_complete}','${req.body.short_description}','${req.body.type}','${req.body.course_type}','${req.body.lang_available}')`
 db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted")
      res.end("ok")
      console.log("ok");
  })
});
app.put("/:id",(req,res)=>{
  let sql = `UPDATE courseDetails SET name = '${req.body.name}',logo='${req.body.logo}',notes='${req.body.notes}',days_to_complete='${req.body.days_to_complete}',short_description='${req.body.short_description}',type='${req.body.type}',course_type='${req.body.course_type}',lang_available='${req.body.lang_available}' Where id = '${req.params.id}'`;
    db.query(sql, (er, data) => {
      if (er) throw er;
      console.log("update");
      res.send("ok")
    })
  })
app.delete("/:id",(req,res)=>{
  var sql = `DELETE FROM courseDetails WHERE id = '${req.params.id}'`;
  db.query(sql,  (err, result)=> {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    res.send("deleted")
  });
})

    
app.listen(8000,()=>{
    console.log("ok");
})