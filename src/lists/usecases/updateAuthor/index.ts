import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";
import { UpdateAuthorController } from "./UpdateAuthorsController";
import { UpdateAuthorUseCase } from "./UpdateAuthorUseCase";

const authorsRepository = AuthorsRepository.getInstance();
const updateAuthorUseCase = new UpdateAuthorUseCase(authorsRepository);
const updateAuthorController = new UpdateAuthorController(updateAuthorUseCase);

export { updateAuthorController }