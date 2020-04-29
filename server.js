const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('SCP SSH Proxy');
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server is running on port ' + port)
});
