import { TagsRepository } from "../../repositories/implementations/TagsRepository";

class ListTagsUseCase {

    constructor (private tagsRepository: TagsRepository){}
    execute() {

        const allTags = this.tagsRepository.list();
        
        return allTags
    }    
}

export { ListTagsUseCase }