const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err)
    {
        console.log('MongoDB connection Successful.....');
    }
    else
    {
        console.log('MongoDB connection not  Successful' + JSON.stringify(err,undefined,2));   
    }
});