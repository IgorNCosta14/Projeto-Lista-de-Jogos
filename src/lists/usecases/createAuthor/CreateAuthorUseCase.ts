import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateAuthorUseCase {

    constructor (private authorsRepository: AuthorsRepository) {}

    execute({name, description}: IRequest){

        if (this.authorsRepository.findByName( name )) {
            throw new Error("Author already added!")
        }
    
        this.authorsRepository.create( { name, description } )
    
    }
}

export { CreateAuthorUseCase }
