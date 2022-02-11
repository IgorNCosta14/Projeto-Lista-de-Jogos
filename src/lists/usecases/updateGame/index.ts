import { GamesRepository } from "../../repositories/implementations/GamesRepository";
import { UpdateGameController } from "./UpdateGameController";
import { UpdateGameUseCase } from "./UpdateGameUseCase";

const gamesRepository = GamesRepository.getInstance();
const updateGameUseCase = new UpdateGameUseCase(gamesRepository);
const updateGameController = new UpdateGameController(updateGameUseCase);

export { updateGameController }