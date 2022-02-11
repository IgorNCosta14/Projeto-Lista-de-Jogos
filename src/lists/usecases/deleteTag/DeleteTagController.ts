import { Request, Response } from "express";
import { DeleteTagUseCase } from "./DeleteTagUseCase";

class DeleteTagController {

    constructor ( private deleteTagUseCase: DeleteTagUseCase ) {}

    handle(request: Request, response: Response): Response {
        const { id } = request.params;

        this.deleteTagUseCase.execute({id})

        return response.status(201).send();}
}

export { DeleteTagController }