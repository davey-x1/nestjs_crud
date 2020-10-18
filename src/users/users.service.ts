import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usersEntity } from './users.entity';
import { UsersDto } from './dto/users.dto';
// -------------------------------------------
@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(usersEntity)
        private userRepository: Repository<usersEntity>
    ){}

    public async create(createUserDto: UsersDto): Promise<usersEntity> {
        const userCreated = new usersEntity();
        userCreated.user_id = "0";
        userCreated.user = createUserDto.user;
        userCreated.password = createUserDto.password;
    
        return this.userRepository.save(userCreated);
    }
    
    async findAll(){
        return await this.userRepository.find();
    }

    async findItemByUser(usernameFind: string){
        return await this.userRepository.find({
            where: [
                {user: usernameFind}
            ]
        })
    }

    async findUserAndPass(userFindDto: UsersDto): Promise<UsersDto[]>{
        return await this.userRepository.find({
            where: [
                {user: userFindDto.user,
                password: userFindDto.password}
            ]
        })
    }

    async updateUsers(valuesForUpdate: UsersDto){
        await this.userRepository.update(valuesForUpdate.user_id, valuesForUpdate);
    }

    async removeUser(valuesForRemove){
        await this.userRepository.remove(valuesForRemove);
    }

}
// -------------------------------------------
