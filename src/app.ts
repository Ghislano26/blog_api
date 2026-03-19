import { PORT } from "./core/constant";
import app from "./server";

app.listen(PORT, ()=>{
    console.log(`Le serveur tourne sur le port http://localhost:${PORT}/`);
    console.log(`Documentation swagger : http://localhost:${PORT}/api-docs`);
})



// installer express, cors, dotenv, swagger-ui-express, swagger-jsdoc, prisma, uuid