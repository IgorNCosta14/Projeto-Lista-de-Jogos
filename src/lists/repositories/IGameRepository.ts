import { Game } from "../entities/Game"

interface ICreateGameDTO {
    gameName: string;
    gameDescription: string;
    gameTags: string; 
    gameAuthor: string;
    gameVersion:string;
    link: string;
}

interface IGameRepository {
    create({gameName, gameDescription, gameVersion, gameTags, gameAuthor, link}: ICreateGameDTO );

    list(): Game[];

    findById(id: string);

    findByName(name: string);

    deleteGame( id: string);

}

export { IGameRepository, ICreateGameDTO }