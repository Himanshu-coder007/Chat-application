import express from "express";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT ||8080;

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
})