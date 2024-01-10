import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userInfo: CreateUserDto) { //const userInfo = req.body;
    const userCreated = this.usersService.create(userInfo);
    return { status: 'success', result: userCreated };
  }

  @Get()
  findAll(@Query('limit') limit) {
    console.log('query limit', limit);
    const users = this.usersService.findAll();
    return { status: 'sucess', result: users };
  }

  @Get(':id')
  findOne(@Param('id') userId: string) { // const userId = req.params.id
    const user = this.usersService.findOne(parseInt(userId));
    return { status: 'success', result: user };
  }

  @Patch(':id')
  update(@Request() req) {
    return this.usersService.update(+req.params.id, req.body);
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    if (isNaN(parseInt(userId))) {
      throw new HttpException('El id no es valido', HttpStatus.BAD_REQUEST);
    } else {
      const result = this.usersService.remove(+userId);
      return { status: 'success', result };
    }
  }
}
