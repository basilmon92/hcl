// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next){
//     var bearerHeader = req.headers.authorization 
//     if (bearerHeader) {
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         var decodUser = jwt.decode(bearerToken);
       
//         if(!decodUser)  return res.send({code:500, message:'Invalid Request Token!'});

//         req.token = bearerToken;
//         req.user = decodUser.user;
//         next();

//       } else {
//         res.send({code:403, message:"Invalid Request Without Token!"})
//       }
// }

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");

function verifyToken(req,res, next){
  var bearerHeader = req.headers.Authorization;
  if(bearerHeader){
    const bearer =  bearerHeader.split(' ');
    const bearerToken = bearer[1];
    var decodeUser = jwt.decode(bearerToken);
    if(!decodeUser){
      req.token = bearerToken;
      req.user = decodeUser;
      next();
    } 
  } else {
      res.send({status: true, code:405, message: "Invalid Request Without Token!"})
  }

}
module.exports = verifyToken