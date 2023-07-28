"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
dotenv.config({
    path: path.join(__dirname, '../', '.env'), // Load .env from the root directory
});
console.log("ENV IS", process.env.ELI_API_TOKEN);
class EliService {
    constructor() {
        if (!process.env.ELI_API_TOKEN) {
            throw "ELI API TOKEN DOESNT EXISTS";
        }
        this.apiToken = process.env.ELI_API_TOKEN;
        this.urlBase = 'https://api.eli.build';
        this.getAllIncentives = this.getAllIncentives.bind(this);
    }
    async getAllIncentives() {
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
            const incentivesResponse = await axios_1.default.post(`${this.urlBase}/incentives`, testBody, {
                headers,
            });
            const incentives = incentivesResponse.data;
            return incentives;
        }
        catch (error) {
            console.error('Error while fetching incentives from eli:', error);
            throw error;
        }
    }
}
exports.default = EliService;
