import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FirstMiddleware } from './middlewares/firstMiddleware';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_URL'),
      }),
    }),
    // MongooseModule.forRoot(
    //   'mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/nestMongoDB?retryWrites=true&w=majority',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('*');
    // consumer.apply(FirstMiddleware).forRoutes('/api/products');
    // consumer.apply(FirstMiddleware).forRoutes({
    //   path: '/api/products',
    //   method: RequestMethod.POST,
    // });
  }
}
