// import express from 'express';  es2015 module
'user strict';

const express = require('express'); // commonJS module

// Constants
const PORT = process.env.PORT || 5000; // 5000; //8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// app.listen(5000);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
