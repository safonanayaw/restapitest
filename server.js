const express = require('express');

const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, ()=> console.log(`app listening on here, ${port}`));

app.use('/api/v1/students', studentRoutes);

app.get('/', (req, res)=>{
    res.send('hello');
});

