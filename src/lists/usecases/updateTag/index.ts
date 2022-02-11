import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { UpdateTagController } from "./UpdateTagController";
import { UpdateTagUseCase } from "./UpdateTagUseCase";

const tagsRepository = TagsRepository.getInstance();
const updateTagUseCase = new UpdateTagUseCase(tagsRepository);
const updateTagController = new UpdateTagController(updateTagUseCase)

export { updateTagController }