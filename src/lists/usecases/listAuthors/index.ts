import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";
import { ListAuthorsController } from "./ListAuthorsController";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

const authorsRepository = AuthorsRepository.getInstance();
const listAuthorsUseCase = new ListAuthorsUseCase(authorsRepository);
const listAuthorsController = new ListAuthorsController(listAuthorsUseCase);

export { listAuthorsController }