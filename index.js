const express = require ("express");
const app = express();
const cors = require ("cors")
const PORT = 4000;
const mysql = require("mysql2");

app.use(cors("*"));
app.use(express);

require ("dotenv").config();

app.listen(PORT, () => (
    console.log(`Server is listening on port ${PORT}`)
));

app.get("/tarifs", (req, res) => {
    
})