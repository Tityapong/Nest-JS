import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepo:Repository<User>

    ){}
   async findOne(id:number){
    return await this.userRepo.findOne({where:{id:id}});
    }

   async create(createUserDto: CreateUserDto){
        const user = this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }
}
