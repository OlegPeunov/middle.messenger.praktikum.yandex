// server.js
// const express = require('express');

// const app = express();
// const PORT = 3000;

// app.use(express.static('./dist/'));

// app.listen(PORT, function () {
//   console.log(`Example app listening on port ${PORT}!`);
// });

// // server.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './dist' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT || PORT}!`);
});
