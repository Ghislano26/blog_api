import express from 'express';
import cors from 'cors'
import router from './routes/routesController';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';




const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api', router)


export default app;