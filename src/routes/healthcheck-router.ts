import { Router } from 'express';
import HealthCheckController from '../controllers/healthcheck-controller';

const healthCheckRouter = Router();
const healthCheckController = new HealthCheckController();

healthCheckRouter.get('/', healthCheckController.healthCheck);

export default healthCheckRouter;
