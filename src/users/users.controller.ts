import { Body, Controller, Get, Post, Render, Param, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersEntity } from './users.entity';
import { UsersDto } from './dto/users.dto';
import { get } from 'http';
// -------------------------------------------

// -------------------------------------------
@Controller('users')
export class UsersController {
    constructor(public service: UsersService){}

    @Post('create')
    @Redirect('/')
    public async create(
        @Body() insertedUser: UsersDto): Promise<usersEntity>{
        const userCreated = await this.service.create(insertedUser);
        return userCreated;
    }

    @Get('findall') 
    findAll(): Promise<usersEntity[]>{
        return this.service.findAll();
    }

    @Get('findby:user')
    findItemByUser(@Param() parameters): any{
        return this.service.findItemByUser(parameters.user);
    }

    @Post('login')
    @Redirect('main')
    async login(@Body() insertedUser: UsersDto){
        const userFound = await this.service.findUserAndPass(insertedUser);
        console.log(userFound[0] == null);
        if(userFound[0] == null){
            return { url: '/' }
        } else {
            return { url: 'main' }
        }
    }

    @Post('update')
    async updateUser(@Body() insertedUser: UsersDto){
        await this.service.updateUsers(insertedUser);
        console.log( this.service.findItemByUser(insertedUser.user));
    }

    @Post('remove')
    async removeUserById(@Body() insertedInt: UsersDto['user_id']){
        await this.service.removeUser(insertedInt);
    }

    @Get('main')
    @Render('user')
    async getUser(){
        const messageToSend = await this.service.findAll();
        return { message: messageToSend };
    }
}

