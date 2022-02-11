import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGames1644008230850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "Games",
                    columns: [
                        {
                            name: "gameId",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "gameName",
                            type: "varchar",
                        },
                        {
                            name: "gameDescription",
                            type: "varchar",
                        },
                        {
                            name: "gameTags",
                            type: "varchar",
                        },
                        {
                            name: "gameAuthor",
                            type: "varchar",
                        },
                        {
                            name: "gameVersion",
                            type: "varchar",
                        },
                        {
                            name: "link",
                            type: "varchar",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "played_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Games")
    }

}
