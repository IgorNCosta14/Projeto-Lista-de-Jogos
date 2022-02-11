import { GamesRepository } from "../../repositories/implementations/GamesRepository"

interface IRequest {
    gameName: string;
    gameDescription: string;
    gameTags: string;
    gameAuthor: string;
    gameVersion: string;
    link: string;
    id:string;
}

class UpdateGameUseCase {

    constructor ( private gamesRepository: GamesRepository) {}

    execute({id,gameName, gameDescription, gameTags, gameAuthor, gameVersion, link}: IRequest)
    {
        if (!this.gamesRepository.findById(id)) {
            throw new Error("Game not found!")
        }
    
        const game = this.gamesRepository.findById(id)
    
        if (gameName) { game.gameName = gameName }
        if (gameDescription) {game.gameDescription = gameDescription}
        if (gameTags) { game.gameTags = gameTags }
        if (gameAuthor) { game.gameAuthor = gameAuthor }
        if (gameVersion) { game.gameVersion = gameVersion }
        if (link) { game.link = link }

        return game
    }
}

export { UpdateGameUseCase }