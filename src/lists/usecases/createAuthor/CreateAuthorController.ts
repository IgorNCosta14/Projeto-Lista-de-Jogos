import { Request, Response } from "express";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";


class CreateAuthorController {

    constructor(private createAuthorUseCase: CreateAuthorUseCase) {}

    handle(request: Request, response: Response): Response{
        const { name, description } = request.body;

        this.createAuthorUseCase.execute({name, description})

        return response.status(201).json({message: "Author created"})
    }
}

export { CreateAuthorController }