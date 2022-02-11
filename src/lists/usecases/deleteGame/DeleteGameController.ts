import { Request, Response } from "express";
import { DeleteGameUseCase } from "./DeleteGameUseCase";

class DeleteGameController {

    constructor(private deleteGameUseCase: DeleteGameUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        
        this.deleteGameUseCase.execute({id})

        return response.status(201).json({message: "Game deleted"})
    }
}

export { DeleteGameController }