"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eli_router_1 = __importDefault(require("./routes/eli-router"));
const healthcheck_router_1 = __importDefault(require("./routes/healthcheck-router"));
const app = (0, express_1.default)();
app.use('/health', healthcheck_router_1.default);
app.use('/eli', eli_router_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
