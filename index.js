let express = require('express');
let app = express();
let port = 3000;

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/api:date?', (req, res) =>{
  let date = new Date();
  if(req.params.date){
    date = new Date(req.params.date);
  }
  res.json({unix: date.getTime(), utc: date.toUTCString()});
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});