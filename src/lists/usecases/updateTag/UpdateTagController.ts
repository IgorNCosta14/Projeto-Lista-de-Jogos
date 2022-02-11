import { Request, Response } from "express";
import { UpdateTagUseCase } from "./UpdateTagUseCase";

class UpdateTagController {

    constructor( private updateTagUseCase: UpdateTagUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        const { name, description } = request.body;

        const tagUpdated = this.updateTagUseCase.execute({id, name, description});
        
        return response.status(201).json(tagUpdated)
    }
}

export { UpdateTagController }