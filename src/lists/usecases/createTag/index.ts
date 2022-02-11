import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { CreateTagController } from "./CreateTagController";
import { CreateTagUseCase } from "./CreateTagUseCase";

const tagsRepository = TagsRepository.getInstance();
const createTagUsecase = new CreateTagUseCase(tagsRepository);
const createTagController = new CreateTagController(createTagUsecase);

export { createTagController }