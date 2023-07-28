import axios, { AxiosResponse } from 'axios';
import Incentive from '../models/eli-model';
import * as dotenv from 'dotenv';
dotenv.config()

class EliService {
    private apiToken: string;
    private urlBase: string;

    constructor() {
        if (!process.env.ELI_API_TOKEN) {
            throw "ELI API TOKEN DOESNT EXISTS"
        }
        this.apiToken = process.env.ELI_API_TOKEN;
        this.urlBase = 'https://api.eli.build';
        this.getAllIncentives = this.getAllIncentives.bind(this);
    }
    public async getAllIncentives(): Promise<Incentive[]> {
        try {
            const headers = {
                Authorization: `Bearer ${this.apiToken}`,
            };
            const testBody = {
                address: {
                    zipcode: "80012",
                },
                property_type: "single_family",
            };
            const incentivesResponse: AxiosResponse = await axios.post(`${this.urlBase}/incentives`, testBody, {
                headers,
            });
            const incentives: Incentive[] = incentivesResponse.data;
            return incentives;
        } catch (error) {
            console.error('Error while fetching incentives from eli:', error);
            throw error;
        }

    }
}

export default EliService;
