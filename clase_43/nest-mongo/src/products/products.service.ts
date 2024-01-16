import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(private config: ConfigService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    console.log(`Variable de entorno: ${this.config.get('ADMIN_EMAIL')}`);
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
