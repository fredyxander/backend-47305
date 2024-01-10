import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor(){
    this.users = [];
  }

  create(userInfo: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      ...userInfo,
    }
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(userId: number) {
    const newUsers = this.users.filter((u) => u.id === userId);
    this.users = newUsers;
    return `usuario con el id: ${userId} eliminado`;
  }
}
