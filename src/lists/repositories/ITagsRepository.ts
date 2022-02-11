import { Tag } from "../entities/Tag"

// DTO => tranferirr os dados das rotasparas os repositorios 
interface ICreateTagDTO {
    name: string;
    description: string;
}

interface ITagsRepository {
    findByTagName(name:string):Promise<Tag>;

    list(): Promise<Tag[]>;

    create({name, description}: ICreateTagDTO): Promise<void>;

    findById(id: string);

    deleteTag(id: string);
}

export { ITagsRepository, ICreateTagDTO }
