const db = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (requestAnimationFrame, res) => {
    const{ email, password } = requestAnimationFrame.body;
    const hash = await bcrypt.hash(password, 10);

    db.query("INSERT INTO users (email, password) VALUES (?,?)",
        [email, hash],
        (err) => {
            if (err) return res.json(err);
            res.json({ message: "User Registered" });
        });


    
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email=?",
        [email],
        async (err, result) => {
            if (result.length === 0)
                return res.json({ message: "User not found" });

             const valid = await bcrypt.compare(password, result[0].password);
             if(!valid)
                return res.json({ message: "Wrong password" });

             const token = jwt.sign({ id: result[0].id }, "secretekey");
             res.json({ token });
        });

    
};