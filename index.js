const express = require('express');
const { readFileSync } = require("fs")
rfs = readFileSync
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('server started');
})