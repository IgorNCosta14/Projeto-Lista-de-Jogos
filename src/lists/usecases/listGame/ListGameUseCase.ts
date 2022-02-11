import { GamesRepository } from "../../repositories/implementations/GamesRepository"

class ListGameUseCase {

    constructor ( private gamesRepository: GamesRepository ) {}

    execute(){
        const listGames = this.gamesRepository.list()

        return listGames
    }
}

export { ListGameUseCase }