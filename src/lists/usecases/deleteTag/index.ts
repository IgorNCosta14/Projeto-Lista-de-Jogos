import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { DeleteTagController } from "./DeleteTagController";
import { DeleteTagUseCase } from "./DeleteTagUseCase";

const tagsRepository = TagsRepository.getInstance();
const deleteTagUseCase = new DeleteTagUseCase(tagsRepository);
const deleteTagController = new DeleteTagController(deleteTagUseCase);

export { deleteTagController }