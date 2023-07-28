import { Request, Response } from 'express';
import EliService from '../services/eli-service';

class EliController {
    eliService: EliService;
    constructor(eliService: EliService) {
        this.eliService = eliService;
        // Bind the methods to the correct context
        this.getAllIncentives = this.getAllIncentives.bind(this);
    }

    public async getAllIncentives(_req: Request, res: Response): Promise<void> {
        try {
            const incentives = await this.eliService.getAllIncentives();
            res.status(200).json(incentives);
        } catch (error) {
            console.error('Error while fetching incentives:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default EliController;
