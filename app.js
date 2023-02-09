const { urlencoded } = require('express');
const express = require('express');
const router = require('./routes/routes');
const app = express();



//connect to the database
const db = require('./config/db')

db.authenticate().then(()=>{
  console.log('Database connected successfully.');
}).catch((error)=>{
  console.log(error);
})

app.use(urlencoded({extended:true}));
app.use(express.json());
app.use(router);

const PORT = 3000

app.listen(PORT, ()=>{
  console.log(`Server started at port ${PORT}`)
});