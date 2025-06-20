


/* 


import express from "express";
import dotenv from "dotenv";
//import cors from 'cors';
import { PostRouter } from "./routes/post.js";


dotenv.config();


const app = express();

//MIDDLEWARE//
app.use(express.json());
// deja explicito para todos los textos de entrada el charset utf8//
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

//PERMISOS CORS PARA EL FRONTEND Y LA API PUBLICA//
/* app.use(cors({
    origin: 'http://localhost:5173'
})); */




/*



app.get("/", (req, res) => {
  res.send("llegaron los Hardwaress");
});

app.use("/posts", PostRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Servidor encendido en http://localhost:${server.address().port}`
  );
});



