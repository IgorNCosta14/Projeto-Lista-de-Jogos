import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { ListTagsController } from "./listTagsController";
import { ListTagsUseCase } from "./ListTagUseCase";

const tagsRepository = TagsRepository.getInstance();
const listTagsUseCase = new ListTagsUseCase(tagsRepository)
const listTagsController = new ListTagsController(listTagsUseCase)

export { listTagsController }