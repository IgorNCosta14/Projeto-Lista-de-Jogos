"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTag = void 0;
const CreateTagService_1 = __importDefault(require("./CreateTagService"));
function createTag(resquest, response) {
    CreateTagService_1.default.execute({
        name: "Terror",
        id: "4654564564",
    });
    return response.send();
}
exports.createTag = createTag;
