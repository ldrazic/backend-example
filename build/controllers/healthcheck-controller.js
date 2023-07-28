"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthCheckController {
    async healthCheck(_req, res) {
        try {
            const status = 'OK';
            res.status(200).json({ status });
        }
        catch (error) {
            console.error('Error during health check:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = HealthCheckController;
