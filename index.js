const express = require('express')
require('dotenv').config();
const port = process.env.PORT || 5000;
const app  = express();

app.use(express.static('public'))
app.listen(port ,()=>{
    console.warn(`server is running http://localhost:${port}`)
})