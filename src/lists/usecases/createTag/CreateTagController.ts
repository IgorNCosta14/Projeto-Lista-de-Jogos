import { Request, Response } from "express"
import { CreateTagUseCase } from "./CreateTagUseCase";


class CreateTagController {

    constructor ( private createTagUsecase: CreateTagUseCase) {}

    hendle(request: Request, response: Response):Response {
        const { name, description } = request.body;

        this.createTagUsecase.execute({ name, description })

        return response.status(201).send()
    }
}

export { CreateTagController }