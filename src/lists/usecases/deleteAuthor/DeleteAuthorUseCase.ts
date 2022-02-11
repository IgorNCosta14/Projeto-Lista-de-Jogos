import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";

interface IRequest {
    id:string
}

class DeleteAuthorUseCase {
    constructor ( private authorsRepository: AuthorsRepository) {}
    execute({ id }:IRequest){
        if (!this.authorsRepository.findById(id)) {
            throw new Error("Author not found")
        }
    
        this.authorsRepository.deleteAuthor(id);
    }
}

export { DeleteAuthorUseCase }