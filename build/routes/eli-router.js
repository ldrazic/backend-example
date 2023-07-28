"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eli_controller_1 = __importDefault(require("../controllers/eli-controller"));
const eli_service_1 = __importDefault(require("../services/eli-service"));
const eliRouter = (0, express_1.Router)();
const eliService = new eli_service_1.default();
const eliController = new eli_controller_1.default(eliService);
eliRouter.get('/incentives', eliController.getAllIncentives);
exports.default = eliRouter;
