import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("Games")
class Game {

    @PrimaryColumn()
    gameId?: string;

    @Column()
    gameName: string;

    @Column()
    gameDescription: string;

    @Column()
    gameTags?: string;//Tag [];

    @Column()
    gameAuthor?: string;//Author [];

    @Column()
    gameVersion?:string;

    @Column()
    link?: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    played_at: Date;

    constructor() {
        if (!this.created_at) {
            this.created_at = new Date();
        }

        if (!this.played_at) {
            this.played_at = new Date();
        }

        if (!this.gameId) {
            this.gameId = uuidV4();
        }

        /*if (!this.gameTags) {
            this.gameTags = [];
        }

        if (!this.gameAuthor) {
            this.gameAuthor = [];
        }*/
    }
}

export { Game };
