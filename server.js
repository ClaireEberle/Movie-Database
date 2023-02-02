const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'password',
        database: 'movieData_db'
    },
    console.log('Connected to the movieData_db database.')
);

app.get("/", (req,res)=>{
res.send("homepage")
})

app.get('/api/movies', (req,res) => {
 
       db.query('SELECT * FROM movies', (err, data) => {
           if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
           }else{
            res.json(data);
           }
       })

    })

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})










