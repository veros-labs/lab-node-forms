
const express = require('express');
const app = express();

const port = 3000;
app.use(express.static('public'));

app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

app.use(require('./routes/form'));
app.use(require('./routes/contact'));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})