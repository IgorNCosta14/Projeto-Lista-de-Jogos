import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";

class ListAuthorsUseCase {
    constructor (private authorsRepository: AuthorsRepository) {}
    
    execute(){
        const authors = this.authorsRepository.list();

        return authors
    }
}

export { ListAuthorsUseCase }