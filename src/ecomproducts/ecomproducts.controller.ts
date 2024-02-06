
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EcomproductsService } from './ecomproducts.service';
import { Product } from './entities/ecomproduct.entity';

@Controller('ecomproducts')
export class EcomproductsController {
  constructor(private readonly productsService: EcomproductsService) {}

  @Get()
  async findAll(): Promise<{ products: Product[] }> {
    const products = await this.productsService.findAll();
    return { products };
  }

  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<Product> {
  //  return this.productsService.findOne(id);
  // }
  @Get('/categories')
  async findCategories(): Promise<any> {
    return this.productsService.findCategories();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
  }
  @Get('/category/:category')
  async findCategoriesName(@Param('category') category: string): Promise<any> {
    const products=await  this.productsService.findCategoriesName(category);
    return {products}
  }
  @Get('/search')
  async search(@Query('q') query: string): Promise<{ products: Product[] }> {
    console.log("queryyyy",query)
    console.log("queryyyy",typeof(query))
    const products = await this.productsService.searchProducts(query);
    return { products };
  }
}
