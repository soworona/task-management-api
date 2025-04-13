require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/taskRoutes');
const errorMiddleware = require('./middlewares/error-middleware');
const swaggerui = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDocument = yaml.load('./src/swagger.yaml');

const app = express();
const port = process.env.PORT ;

app.use(express.json());
app.use('/api/tasks', taskRouter);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));
app.use(errorMiddleware);

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection failed: ', err
    ));

app.listen(port, () => {    
    console.log(`Server is listening at http://localhost:${port}`);
    console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});