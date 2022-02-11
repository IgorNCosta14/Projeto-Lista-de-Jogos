import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";
import { DeleteAuthorController } from "./DeleteAuthorController";
import { DeleteAuthorUseCase } from "./DeleteAuthorUseCase";

const authorsRepository = AuthorsRepository.getInstance();
const deleteAuthorUseCase = new DeleteAuthorUseCase(authorsRepository);
const deleteAuthorUseController = new DeleteAuthorController(deleteAuthorUseCase);

export { deleteAuthorUseController }