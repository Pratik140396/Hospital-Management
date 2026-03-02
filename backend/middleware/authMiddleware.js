const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) =>{
    const token = req.headers.authorization;
    if(!token) return res.json({ message: "No token" });

    jwt.verify(token, "secretkey", (err, decoded)=> {
        if(err) return req.json({ message: "Invalid token"});
        req.user = decoded;
        next();
    });

};