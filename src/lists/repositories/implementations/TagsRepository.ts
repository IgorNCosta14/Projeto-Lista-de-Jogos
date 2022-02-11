import { getRepository, Repository } from "typeorm";
import { Tag } from "../../entities/Tag"
import { ICreateTagDTO, ITagsRepository } from "../ITagsRepository";

class TagsRepository implements ITagsRepository {

    private repository: Repository<Tag>;

    private static INSTANCE: TagsRepository;

    private constructor() {
        this.repository= getRepository(Tag)
    }

    public static getInstance(): TagsRepository {
        if(!TagsRepository.INSTANCE){
            TagsRepository.INSTANCE = new TagsRepository();
        }
        return TagsRepository.INSTANCE;
    }

    async create({description, name}: ICreateTagDTO): Promise <void> {
        
        const tag = this.repository.create({
            description,
            name
        })

        await this.repository.save(tag)
    }

    async list(): Promise<Tag[]> { 
        const tags = await this.repository.find();

        return tags;
    }

    async findByTagName(name: string): Promise<Tag> {
        const tag = await this.repository.findOne({ name })

        return tag;
    }

    findById(id: string) {
        const tag = this.tags.find(tag => tag.id === id)

        return tag;
    }

    deleteTag(id: string) {
        const tagIndex = this.tags.findIndex(tag => tag.id === id)

        this.tags.splice(tagIndex, 1)
    }
}

export { TagsRepository }