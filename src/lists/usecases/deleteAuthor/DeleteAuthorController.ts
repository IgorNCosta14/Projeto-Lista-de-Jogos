import { Request, Response } from "express";
import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";

class DeleteAuthorController {

    constructor( private deleteAuthorUseCase: DeleteAuthorUseCase ) {}

    handle(request: Request, response: Response):Response{
        const { id } = request.params;

        this.deleteAuthorUseCase.execute({id})

        return response.status(201).json({message: "Author deleted"});
    }

}

export { DeleteAuthorController }