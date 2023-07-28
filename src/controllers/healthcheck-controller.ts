import { Request, Response } from 'express';

class HealthCheckController {
    public async healthCheck(_req: Request, res: Response): Promise<void> {
        try {
            const status = 'OK';
            res.status(200).json({ status });
        } catch (error) {
            console.error('Error during health check:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default HealthCheckController;
