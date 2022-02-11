import { Request, Response } from "express";
import { UpdateGameUseCase } from "./UpdateGameUseCase";

class UpdateGameController {
    constructor(private updateGameUseCase: UpdateGameUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        const {gameName, gameDescription, gameTags, gameAuthor, gameVersion, link} = request.body;

        const game = this.updateGameUseCase.execute({id, gameName, gameDescription, gameTags, gameAuthor, gameVersion, link})

        return response.status(201).json({message: "Alteração feita com sucesso", game})
    }
}

export { UpdateGameController }