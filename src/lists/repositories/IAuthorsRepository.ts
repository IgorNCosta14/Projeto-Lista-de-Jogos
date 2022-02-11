import { Author } from "../entities/Author";

interface ICreateAuthorDTO {
    name: string;
    description: string;
}

interface IAuthorsRepository {
    create({description, name}: ICreateAuthorDTO);

    list(): Author[];

    findByName(name: string): Author;

    findById(id: string);

    deleteAuthor(id: string);
}

export { IAuthorsRepository, ICreateAuthorDTO }