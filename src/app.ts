import express, { Application } from 'express';
import eliRouter from './routes/eli-router';
import healthCheckRouter from './routes/healthcheck-router';

const app: Application = express();

app.use('/health', healthCheckRouter);
app.use('/eli', eliRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
