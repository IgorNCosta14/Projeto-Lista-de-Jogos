import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";

interface IRequest {
    name: string;
    description: string;
    id: string;
}

class UpdateAuthorUseCase {

    constructor ( private authorsRepository: AuthorsRepository){}

    execute({id, name, description}: IRequest){
        const author = this.authorsRepository.findById(id);

        if (!author){
            throw new Error("Author not found")
        }

        if (name) { author.name = name }
        if (description) { author.description = description }

        return author

    }
}

export { UpdateAuthorUseCase }