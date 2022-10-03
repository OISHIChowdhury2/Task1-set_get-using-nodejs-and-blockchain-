const express = require('express');
const bodyParser = require("body-parser");
const route =express.Router();
const jsonParser = bodyParser.json();

const app = express();
app.use(express.json())
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoute = require('./route');
const contract= require('./controller');
const { response } = require('express');

const { Router} = require('express');
const router = Router();


app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.use('/user', userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/setUser', async function(req, res, next)  {   
   try{
    console.log(req.body.name);
      let txHash = await contract.setName(
          req.body.name
      );
      //  console.log(txHash);
      return res.status(200).json({txHash: txHash});
      }
  catch (ex) {
      console.log(ex);
      return res.status(500).json({message: ex.toString()});
  }
});

app.get('/getUser', async function (req, res, next) {
  try {
     const nl = await contract.getName(req.body.name);
      return res.status(200).json({message: nl});
  }
  catch (ex) {
      console.log(ex);
      return res.status(500).json({message: ex.toString()});
  }
});

module.exports = route;