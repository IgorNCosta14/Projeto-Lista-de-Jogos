import { GamesRepository } from "../../repositories/implementations/GamesRepository";
import { ListGamesController } from "./ListGameController";
import { ListGameUseCase } from "./ListGameUseCase";

const gamesRepository = GamesRepository.getInstance();
const listGamesUseCase = new ListGameUseCase(gamesRepository);
const listGamesController = new ListGamesController(listGamesUseCase);

export { listGamesController }