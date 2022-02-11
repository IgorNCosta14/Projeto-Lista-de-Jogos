import { Request, Response } from "express";
import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

class UpdateAuthorController {

    constructor( private updateAuthoUseCase: UpdateAuthorUseCase  ) {}

    handle(request: Request, response: Response): Response {

        const { id } = request.params;
        const { name, description } = request.body;
        
        const author = this.updateAuthoUseCase.execute({id, name, description})
        
        return response.status(201).json(author)

    }
}

export { UpdateAuthorController }