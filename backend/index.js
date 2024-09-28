import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    const output=['pankaj','123'];
    res.status(200).json(output)
})

app.listen(8800);