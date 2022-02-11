import { v4 as uuidV4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("Tags")
class Tag {

    @Column()
    name: string;

    @Column()
    description: string;
    
    @PrimaryColumn()
    id?: string;

    constructor() {
        if ( !this.id ) {
            this.id = uuidV4();
        }
    }
}

export { Tag }