const path = require('path');
const express = require('express');


const publicpath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3001
const app = express();

app.use(express.static(publicpath));

app.listen(3001,()=>console.log(`server connected on port ${port}`));
console.log(publicpath);