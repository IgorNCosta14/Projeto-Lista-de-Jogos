import { Request, Response } from "express";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

class ListAuthorsController {

    constructor( private listAuthorsUseCase: ListAuthorsUseCase ) {}

    handle(request: Request, response: Response): Response {

    const authors = this.listAuthorsUseCase.execute()

    return response.status(201).json(authors)   
    }
}

export { ListAuthorsController }