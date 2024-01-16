import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.usersService.create(createUserDto);
      return { status: 'success', result };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.usersService.findAll();
      return { status: 'success', result };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') userId: string) {
    try {
      const result = await this.usersService.findOne(userId);
      return { status: 'success', result };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const result = await this.usersService.update(id, updateUserDto);
      return { status: 'success', result };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.usersService.remove(id);
      return { status: 'success', result };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }
}
