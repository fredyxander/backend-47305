import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const result = await this.usersModel.create(createUserDto);
    return result;
  }

  async findAll() {
    const result = await this.usersModel.find();
    return result;
  }

  async findOne(id: string) {
    const result = await this.usersModel.findById(id);
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.usersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return result;
  }

  async remove(id: string) {
    const result = await this.usersModel.findByIdAndDelete(id);
    return result;
  }
}
