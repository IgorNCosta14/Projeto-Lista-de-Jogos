import { TagsRepository } from "../../repositories/implementations/TagsRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateTagUseCase {
    constructor (private tagsRepository: TagsRepository) {}

    execute({name, description}: IRequest) {

        if ( this.tagsRepository.findByTagName( name ) ) {
            
            throw new Error("Tag already added!")

        }

        this.tagsRepository.create({name, description})
    }
}

export { CreateTagUseCase }