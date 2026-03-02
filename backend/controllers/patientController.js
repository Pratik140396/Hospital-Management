const db = require("../config/db");

exports.addPatient = (req, res) => {
    const { name, age, disease } = req.body;

    db.query(
        "INSERT INTO patients (name, age, disease) VALUES (?, ?, ?)"
        [name, age, disease],
        (err) => {
            if (err) return res.json(err);
            res.json({ message: "Patient Added" });
        });


    
};

exports.getPatients = (req, res) => {
    db.query("SELECT * FROM patient", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
};

