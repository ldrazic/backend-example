import { Router } from 'express';
import EliController from '../controllers/eli-controller';
import EliService from '../services/eli-service';

const eliRouter = Router();
const eliService = new EliService();
const eliController = new EliController(eliService);
eliRouter.get('/incentives', eliController.getAllIncentives);

export default eliRouter;
