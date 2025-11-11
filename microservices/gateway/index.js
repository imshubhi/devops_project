const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/summary', async (req, res)=> {
  const user = await fetch('http://user-service:4000/user').then(r=>r.json());
  const product = await fetch('http://product-service:5000/product').then(r=>r.json());
  res.json({user, product});
});
app.listen(3000,()=>console.log("Gateway on 3000"));
