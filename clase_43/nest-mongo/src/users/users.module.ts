import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, usersSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, //coleccion users
        schema: usersSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
