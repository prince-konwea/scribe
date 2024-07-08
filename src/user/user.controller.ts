import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Post('register')
  create(CreateUserDto: CreateUserDto){
    return this.userService.createUser(CreateUserDto)
  }
}
