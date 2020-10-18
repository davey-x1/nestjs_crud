import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
// -------------------------------------------
@Entity('users')
// -------------------------------------------
export class usersEntity{
    @PrimaryGeneratedColumn()
    user_id: string
    
    @Column('varchar', {length: 250})
    user: string
    
    @Column('varchar', {length: 250})
    password: string

}