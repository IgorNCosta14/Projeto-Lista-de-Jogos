import { GamesRepository } from "../../repositories/implementations/GamesRepository"

interface IRequest {
    id: string;
}

class DeleteGameUseCase {
    constructor ( private gamesRepository: GamesRepository ) {}
    execute({id}: IRequest){

        if (!this.gamesRepository.findById(id)) {
            throw new Error ("Game not found!")
        }
    
        this.gamesRepository.deleteGame(id)

    }
}

export { DeleteGameUseCase }