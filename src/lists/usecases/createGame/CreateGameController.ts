import { Request, Response } from "express";
import { CreateGameUseCase } from "./CreateGameUseCase";

class CreateGameController {
    constructor( private createGameUseCase: CreateGameUseCase) {}

    handle(request: Request, response: Response): Response {
        const { gameName, gameDescription, gameVersion, gameTags, gameAuthor, link } = request.body;

        this.createGameUseCase.execute({gameName, gameDescription, gameVersion, gameTags, gameAuthor, link})
        
        return response.status(201).json({message:"Game added"});
    }
}

export { CreateGameController }