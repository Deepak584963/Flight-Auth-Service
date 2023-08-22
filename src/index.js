const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig')
const startServer = ()=>{

    
    
    app.listen(PORT, ()=>{
      console.log(`server started on ${PORT}`)
    })
}

startServer();