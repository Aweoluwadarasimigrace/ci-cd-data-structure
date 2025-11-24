
const express = require('express');
const app = express();





app.get('/', (req, res) => {
  res.send("Hello, CI/CD Students!");
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


module.exports = app;