import { Game } from "../../entities/Game";
import { ICreateGameDTO, IGameRepository } from "../IGameRepository";

class GamesRepository implements IGameRepository {

    private games : Game [];

    private static INSTANCE: GamesRepository

    public static getInstance(): GamesRepository{
        if (!GamesRepository.INSTANCE) {
            GamesRepository.INSTANCE = new GamesRepository;
        }
        return GamesRepository.INSTANCE
    }

    constructor() {
        this.games = [];
    }

    create({gameName, gameDescription, gameVersion, gameTags, gameAuthor, link}: ICreateGameDTO ) {
        const game = new Game();

        Object.assign(game, {
            gameName,
            gameDescription,
            gameVersion,
            gameTags,
            gameAuthor,
            link,
        })

        this.games.push(game)
    }

    list() {
        return this.games
    }

    findById(id: string) {
        const game = this.games.find( game => game.gameId === id)

        return game
    }

    findByName(name: string){
        const game = this.games.find( game => game.gameName === name)

        return game
    }

    deleteGame( id: string) {
        const userIndex = this.games.findIndex( game => game.gameId === id)
        this.games.splice(userIndex, 1)

    }
    
}

export {GamesRepository}