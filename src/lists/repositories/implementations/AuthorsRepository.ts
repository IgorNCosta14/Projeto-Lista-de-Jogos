import { Author } from "../../entities/Author"
import { IAuthorsRepository, ICreateAuthorDTO } from "../IAuthorsRepository";


class AuthorsRepository implements IAuthorsRepository {
    
    private authors: Author [];

    private static INSTANCE: AuthorsRepository

    private constructor () {
        this.authors = [];
    }
    
    public static getInstance(): AuthorsRepository {
        if (!AuthorsRepository.INSTANCE){
            AuthorsRepository.INSTANCE = new AuthorsRepository;
        }
        return AuthorsRepository.INSTANCE;
    }

    create({description, name}: ICreateAuthorDTO) {
        const author = new Author();

        Object.assign(author, {
            name,
            description,
        })

        this.authors.push(author)
    }

    list(): Author[] {
        return this.authors
    }

    findByName(name: string){
        const author = this.authors.find( author => author.name === name)

        return author
    }

    findById(id: string) {
        const author = this.authors.find( author => author.id === id);

        return author;
    }

    deleteAuthor(id: string) {
        const authorIndex = this.authors.findIndex(author => author.id === id)
        
        this.authors.splice(authorIndex, 1)
    }
}

export { AuthorsRepository }