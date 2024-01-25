let express = require('express');
let app = express();
let port = 3000;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/api:date', (req, res) =>{
  let date = req.params.date;
  let unix = new Date(date).getTime();
  let utc = new Date(date).toUTCString();
  res.json({unix: unix, utc: utc});
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});