import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ProductRouter } from "./routes/product.js";

dotenv.config();

const app = express();

//MIDDLEWARE//
app.use(express.json());

//PERMISOS CORS PARA EL FRONTEND Y LA API PUBLICA//
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send(`

    <article style="align-self: center; justify-self: center ;text-align: center; width: fit-content ; border: 1px solid black; padding: 20px; border-radius: 10px;">

        <h2>CircuWare</h2>

        <a href="http://localhost:3010/cpu">CPUS</a></br>
        <a href="http://localhost:3010/case_pc">Gabinetes</a></br>
        <a href="http://localhost:3010/disk">Discos</a></br>
        <a href="http://localhost:3010/graphics_card">Placas de Video</a></br>
        <a href="http://localhost:3010/motherboard">Mothers</a></br>
        <a href="http://localhost:3010/power_supply">Fuentes</a></br>
        <a href="http://localhost:3010/ram">Memorias Ram</a></br>

</article>

        <footer>
            <p>© 2023 CircuWare. Todos los derechos reservados.</p>
        </footer>
    `);
});

app.use("/", ProductRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Servidor encendido en http://localhost:${server.address().port}`
  );
});
