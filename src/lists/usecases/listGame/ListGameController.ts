import { Request, Response } from "express";
import { ListGameUseCase } from "./ListGameUseCase";

class ListGamesController {
    constructor( private listGamesUseCase: ListGameUseCase) {}
    
    handle(request: Request, response: Response): Response {
        return response.status(201).json(this.listGamesUseCase)
    }
}

export { ListGamesController }