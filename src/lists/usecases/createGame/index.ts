import { GamesRepository } from "../../repositories/implementations/GamesRepository";
import { CreateGameController } from "./CreateGameController";
import { CreateGameUseCase } from "./CreateGameUseCase";

const gamesRepository = GamesRepository.getInstance();
const createGameUseCase = new CreateGameUseCase(gamesRepository);
const createGameController = new CreateGameController(createGameUseCase);

export { createGameController }