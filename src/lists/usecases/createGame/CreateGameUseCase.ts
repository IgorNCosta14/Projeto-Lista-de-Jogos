import { GamesRepository } from "../../repositories/implementations/GamesRepository"

interface IRequest {

}

class CreateGameUseCase {

    constructor( private gamesRepository: GamesRepository ) {}

    execute({gameName, gameDescription, gameVersion, gameTags, gameAuthor, link}){
        if (this.gamesRepository.findByName(gameName)) {
            throw new Error ("Game already added!")
        }

        this.gamesRepository.create({gameName, gameDescription, gameVersion, gameTags, gameAuthor, link})
    }
}

export { CreateGameUseCase }