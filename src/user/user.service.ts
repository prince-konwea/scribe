import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async createUser(createUserDto: CreateUserDto): Promise<User>{
       const createdUser = new this.userModel(createUserDto)
       return createdUser.save()
    }
}
