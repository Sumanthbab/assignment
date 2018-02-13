exports.register = function(req,res){
  var today = new Date();
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "password":req.body.password,
    "created":today,
    "modified":today
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error..",error);
    res.send({
      "code":400,
      "failed":"error"
    })
  }else{
    console.log('solution ', results);
    res.send({
      "code":200,
      "success":"User sucessfully registered"
        });
  }
  });
}

