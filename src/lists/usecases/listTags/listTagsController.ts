import { Request, Response } from "express";
import { ListTagsUseCase } from "./ListTagUseCase";

class ListTagsController {

    constructor(private listTagsUseCase: ListTagsUseCase) {}
    
    handle(request: Request, response: Response): Response {

        const allTags = this.listTagsUseCase.execute();

        return response.json(allTags)
    }
}

export { ListTagsController }