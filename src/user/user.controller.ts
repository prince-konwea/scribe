import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('roles')
  findAll(): string {
    return 'This action returns all users roles';
  }  

  @Get(':id')
   findOne(@Param('id') id: string): string{
       return `This action returns a #${id} user`
   }

  @Post('register')
  create(): string{
    return "This action adds a new user"
  }
}
