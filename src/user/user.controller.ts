import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('roles')
  findAll(): string {
    return 'This action returns all users roles';
  }
  @Post('register')
  create(): string{
    return "This action adds a new user"
  }
}
