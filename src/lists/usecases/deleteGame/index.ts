import { GamesRepository } from "../../repositories/implementations/GamesRepository";
import { DeleteGameController } from "./DeleteGameController";
import { DeleteGameUseCase } from "./DeleteGameUseCase";

const gamesRepository = GamesRepository.getInstance();
const deleteGameUseCase = new DeleteGameUseCase(gamesRepository);
const deleteGameController = new DeleteGameController(deleteGameUseCase);

export { deleteGameController }