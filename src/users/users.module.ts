import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
// -------------------------------------------
@Module({
  imports: [TypeOrmModule.forFeature([usersEntity])],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService]
})
// -------------------------------------------
export class UsersModule {}
