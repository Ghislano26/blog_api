import swaggerJSDoc from 'swagger-jsdoc';
import { PORT } from './core/constant';

const options = {
    definition: {
        openapi : '3.0.0',
        info : {
            title: 'Backend_blog_api',
            version: '1.0.0',
            description: 'API backend de gestion de blog'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: ['./src/routes/*.ts']
}


const swaggerSpec = swaggerJSDoc(options);


export default swaggerSpec