"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateTagService {
    execute({ name, id, description }) {
        console.log(name, id, description);
    }
}
exports.default = new CreateTagService;
