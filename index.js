let express = require('express');
let app = express();
let port = 3000;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/api/:date?', (req, res) => {
  let inputDate = req.params.date;
  let date;
  if (!inputDate) {
    date = new Date();
  } else if (/\d{5,}/.test(inputDate)) {
    date = new Date(parseInt(inputDate));
  } else {
    date = new Date(inputDate);
  }
  if (date.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({ unix: Math.floor(date.getTime()), utc: date.toUTCString() });
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});