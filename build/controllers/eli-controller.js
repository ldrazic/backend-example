"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EliController {
    constructor(eliService) {
        this.eliService = eliService;
        // Bind the methods to the correct context
        this.getAllIncentives = this.getAllIncentives.bind(this);
    }
    async getAllIncentives(_req, res) {
        try {
            const incentives = await this.eliService.getAllIncentives();
            res.status(200).json(incentives);
        }
        catch (error) {
            console.error('Error while fetching incentives:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = EliController;
