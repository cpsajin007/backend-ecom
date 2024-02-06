


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/ecomproduct.entity';
import { EcomproductsService } from './ecomproducts.service';
import { EcomproductsController } from './ecomproducts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [EcomproductsService],
  controllers: [EcomproductsController],
})
export class EcomproductsModule {}
