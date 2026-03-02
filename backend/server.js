const express = require("express");
const cors = require("cors");
require("dotenv").config();

//const connectDB = require("./config/db");

const app = express();

require("./config/db"); //just require it because we are using mysql for database.

//connectDB();

app.use(cors());
app.use(express.json());

//important part

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));

app.listen(5000, () => console.log("Server runningon port 5000"));




// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });





// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/patients", require("./routes/patientRoutes"));

// app.listen(5000, () => console.log("Server running on 50000"));
