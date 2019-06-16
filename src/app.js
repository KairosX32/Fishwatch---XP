const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');

// Static dir
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res, next) => {
    res.render('index');
})



app.listen(port, _ => console.log(`Server is running on port ${port}`));