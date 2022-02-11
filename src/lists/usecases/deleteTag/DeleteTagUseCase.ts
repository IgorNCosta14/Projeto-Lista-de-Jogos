import { TagsRepository } from "../../repositories/implementations/TagsRepository";

interface IRequest {
    id: string
}

class DeleteTagUseCase {
    constructor(private tagsRepository: TagsRepository){} 

    execute({id}: IRequest) {
        if (!this.tagsRepository.findById(id)) {

            throw new Error("Tag not found!")
        }

        this.tagsRepository.deleteTag(id)
    }
    


}

export { DeleteTagUseCase  }