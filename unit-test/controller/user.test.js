"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
//import moch from "mocha";
const controller_1 = require("../../src/controller");
const sinon_1 = __importDefault(require("sinon"));
const util_1 = require("../../src/util");
describe('test user controller', async () => {
    beforeEach(() => {
    });
    after(() => {
    });
    it('user valiation failed, ', async () => {
        sinon_1.default.mock(util_1.validate).expects("user").returns('last name is mandatory!');
        const userData = { email: 'test@gmail.com', firstName: 'test', lastName: '' };
        let result = await controller_1.user_controller.create(userData);
        chai_1.expect(result).to.deep.equal({ statusCode: 400, data: { code: 1, message: 'last name is mandatory!' } });
    });
});
