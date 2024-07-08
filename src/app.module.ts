import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/testApp')],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
