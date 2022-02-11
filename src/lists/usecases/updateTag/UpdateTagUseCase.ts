import { TagsRepository } from "../../repositories/implementations/TagsRepository";

interface IRequest {
    id: string;
    name?: string;
    descriptions?: string;
}

class UpdateTagUseCase{
    constructor (private tagsRepository: TagsRepository) {}
    execute({name, id, description}) {
        if (!this.tagsRepository.findById(id)) {
            throw new Error("Tag not found!")
        }

        const tag = this.tagsRepository.findById(id);

        if (name) {tag.name = name;}
        if (description) {tag.description = description;}

        return tag
    }

}

export { UpdateTagUseCase }