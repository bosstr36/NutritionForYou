const express = require('express');
const app = express();
const mysql = require('mysql');
const _ = require('lodash');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "project_db"
});
  
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


//Create
/*app.post('/api/createmenu',(req, res) =>{
    var Menu_Name = _.get(req,['body','Common_Food_Name']);
    var Menu_Cal = _.get(req,['body','Common_Food_Cal']);

    try{
        if(Menu_Name&&Menu_Cal){

        }
        else{
            return res.status(200).json({
                RespCode: 400,
                RespMessage: 'bad: Invalid request',
                Log: 0
            })
        }

    }
    catch(error){
        console.log('ERR! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})*/

//Get all Common_Food
app.get('/api/allcommon_food', (req, res) =>{
    try{
        db.query('select * from common_food',[],
        (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                /*for(let i = 0; i < data.length; i++){
                    delete data[i].Common_Food_Id
                }*/

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get all Res_Food
app.get('/api/allres_food', (req, res) =>{
    try{
        db.query('select * from res_food',[],
        (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                /*for(let i = 0; i < data.length; i++){
                    delete data[i].Common_Food_Id
                }*/

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get all Drink
app.get('/api/alldrink', (req, res) =>{
    try{
        db.query('select * from drink',[],
        (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                /*for(let i = 0; i < data.length; i++){
                    delete data[i].Common_Food_Id
                }*/

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get all Dessert_Snack_Name
app.get('/api/alldessert_snack', (req, res) =>{
    try{
        db.query('select * from dessert_snack',[],
        (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                /*for(let i = 0; i < data.length; i++){
                    delete data[i].Common_Food_Id
                }*/

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get common_food by Request
app.post('/api/common_food', (req, res) =>{

    var common_name = _.get(req,['body','name']);


    console.log(common_name);


    try{
        if(common_name){
            
            db.query('select * from common_food where Common_Food_Name = ?',[
                common_name
            ],
            (err, data,fill) => {
            if(data&&data[0]){
                
                //Delete data row
                for(let i = 0; i < data.length; i++){
                    delete data[i].Common_Food_Id
                    delete data[i].Common_Food_Name
                    delete data[i].Common_Food_Serving
                }
                
                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
        }
        else{
            console.log('ERR 2! : Invalid data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Invalid data',
                    Log: 2
                })
        }
        
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})


//Get res_food by request
app.get('/api/res_food', (req, res) =>{

    var res_name = _.get(req,['body','name']);

    try{
        if(res_name){

            db.query('select * from res_food where Res_Food_Name= ?',[
                res_name
            ],
            (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                for(let i = 0; i < data.length; i++){
                    //delete data[i].Res_Food_Id
                    delete data[i].Res_Food_Serving
                }

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
        }
        else{
            console.log('ERR 2! : Invalid data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Invalid data',
                    Log: 2
                })
        }
        
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get drink by request
app.get('/api/drink', (req, res) =>{

    var drink_name = _.get(req,['body','name']);

    try{
        if(drink_name){

            db.query('select * from drink where Drink_Name= ?',[
                drink_name
            ],
            (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                for(let i = 0; i < data.length; i++){
                    //delete data[i].Res_Food_Id
                    delete data[i].Drink_Serving
                }

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
        }
        else{
            console.log('ERR 2! : Invalid data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Invalid data',
                    Log: 2
                })
        }
        
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//Get dessert_snack by request
app.get('/api/dessert_snack', (req, res) =>{

    var dessert_snack_name = _.get(req,['body','name']);

    try{
        if(dessert_snack_name){

            db.query('select * from dessert_snack where Dessert_Snack_Name= ?',[
                dessert_snack_name
            ],
            (err, data,fill) => {
            if(data&&data[0]){

                //Delete data row
                for(let i = 0; i < data.length; i++){
                    //delete data[i].Res_Food_Id
                    delete data[i].Dessert_Snack_Serving
                }

                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'success',
                    Result: data
                })
            }
            else{

                console.log('ERR 1! : Not found data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Not found data',
                    Log: 1
                })

            }
        })
        }
        else{
            console.log('ERR 2! : Invalid data')
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad : Invalid data',
                    Log: 2
                })
        }
        
    }
    catch(error){
        console.log('ERR 0! :',error)
        return res.status(200).json({
            RespCode: 400,
            RespMessage: 'bad',
            Log: 0
        })
    }
})

//serverport
const server = app.listen(5000,() => {
    console.log('Nodejs is running on port 5000!')
})

module.exports = app;