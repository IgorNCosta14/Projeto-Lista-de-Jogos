import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("Authors")
class Author {

    @Column()
    name: string;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date

    @PrimaryColumn()
    id?: string

    constructor () {
        if ( !this.id ) {
            this.id = uuidV4();
        }
        if ( !this.created_at ) {
            this.created_at = new Date();
        }
    }
}

export { Author }