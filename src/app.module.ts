import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { usersEntity } from './users/users.entity';
// -------------------------------------------
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ruby.db.elephantsql.com',
    port: 5432,
    username: 'osfrohkj',
    password: 'ug-uMIFUCI-82acQmqJwIFaGePOdlLmG',
    database: 'osfrohkj',
    entities: [usersEntity],
    synchronize: true,
    logging: true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
// -------------------------------------------
export class AppModule {}
