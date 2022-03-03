const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Name:- Bapodara Amit D</h1> <h1>Company:-Atharva System</h1> <h4>Desognation:-Sr Devops</h4> <p>Location:-Ahmedabad </p> <p>version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
